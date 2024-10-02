import { Context } from '@nuxt/types'
import type {
  Result as IResult,
  NuxtContentInstance as INuxtContentInstance,
} from '@nuxt/content'
import type { IPrettyfiedTemporalDate } from '../date'
import {
  ITaxonomyHuman,
  ITaxonomyItem,
  toTaxonomyItemCollection,
  extractTaxonomyHuman,
  hydrateTaxonomyCollection,
} from '../taxonomy'
import type {
  IFrontMatterPreambleInnerDocument,
  IFrontMatterCoverImageInnerDocument,
} from './front-matter-inner-document'

export type INuxtContentResolver = (
  $content: INuxtContentInstance,
) => Promise<IBaseNuxtContentResult[]>

export interface IBaseNuxtContentResult extends IResult {
  /**
   * Nuxt internal file creation date
   *
   * #ToLearn: Figure Out Unsure if it's filesystem
   */
  createdAt: string
  /**
   * Nuxt internal file updated date
   *
   * #ToLearn: Figure Out Unsure if it's filesystem
   */
  updatedAt: string
  /**
   * Hard-coded, per file, desired publication date.
   */
  created: string
  /**
   * Hard-coded, per file, desired last updated date.
   */
  updated: string
  dir: string
  extension: string
  path: string
  slug: string
}

const FRONT_MATTER_CALL_TO_ACTION_TYPE = [
  'blog-post',
  'page',
  'public-pull-request',
] as const

export type IFrontMatterCallToActionType =
  typeof FRONT_MATTER_CALL_TO_ACTION_TYPE[number]

export interface IFrontMatterCallToAction {
  href: string
  type: IFrontMatterCallToActionType
}

type StringPrefixHttp = string // `http${string}` — #TODO

export interface WaybackMachineSnapshots {
  orig: StringPrefixHttp
  snapshots: StringPrefixHttp[]
}

export interface INuxtContentResult extends IBaseNuxtContentResult {
  callToAction?: IFrontMatterCallToAction
  canonical?: string
  categories: string[] | string
  tags: string[]
  coverImage?: IFrontMatterCoverImageInnerDocument
  date: string
  description?: string
  keywords?: string[]
  /**
   * BCP 47 IETF Language tag.
   */
  locale: 'fr' | 'en' | 'fr-CA' | 'en-CA'
  oldArticle?: string
  preamble?: IFrontMatterPreambleInnerDocument
  waybackMachineSnapshots: WaybackMachineSnapshots
  excerpt?: string
  redirect?: string
  title: string
  /**
   * WordPress wp:status value
   */
  status: 'publish' | 'draft' | 'private'
  revising: boolean
}

export type INuxtContentPrevNext = Pick<
  INuxtContentResult,
  'locale' | 'path' | 'title'
>

export interface INuxtContentIndexResult
  extends Pick<
    INuxtContentResult,
    'created' | 'updated' | 'locale' | 'path' | 'slug' | 'title'
  > {
  prettyfiedTemporalDate?: IPrettyfiedTemporalDate
}

export const isFrontMatterCallToActionType = (
  maybe: unknown,
): maybe is IFrontMatterCallToActionType => {
  let outcome = false
  if (typeof maybe === 'string') {
    outcome = FRONT_MATTER_CALL_TO_ACTION_TYPE.includes(
      maybe as IFrontMatterCallToActionType,
    )
  }
  return outcome
}

export const isNuxtContentResult = (
  maybe: any,
): maybe is INuxtContentResult => {
  let outcome = false
  const hasTitle =
    Reflect.has(maybe, 'title') && typeof maybe.title === 'string'
  const hasSlug = Reflect.has(maybe, 'slug') && typeof maybe.slug === 'string'
  /**
   * @TODO This should be checking more accurately
   */
  if (maybe && hasTitle && hasSlug) {
    outcome = true
  }
  return outcome
}

export const queryNuxtContent = async (
  $content: Context['$content'],
  route: Context['route'],
): Promise<INuxtContentResult[]> => {
  let contents: INuxtContentResult[] = []
  const { query = {} as Context['route']['query'] } = route
  let { q = '' } = query
  q = typeof q === 'string' ? q : ''
  /**
   * Bookmarks:
   * - https://github.com/techfort/LokiJS/wiki/Query-Examples#find-queries
   * - https://github.com/nuxt/content/blob/%40nuxt/content%401.8.1/docs/content/en/fetching.md
   * - https://github.com/nuxt/content/blob/%40nuxt/content%401.8.1/docs/content/en/advanced.md
   *
   * See also content API:
   * - http://localhost:3000/_content?deep=true
   * - http://localhost:3000/_content/blog?deep=true
   * - http://localhost:3000/_content/blog?deep=true&created_defined=asdf
   */
  let ds = $content('blog', { deep: true })
    .sortBy('created', 'desc')
    .only([
      'created',
      'excerpt',
      'locale',
      'path',
      'preamble',
      'slug',
      'tags',
      'title',
      'updated',
    ])
  if (q) {
    ds = ds.search(q)
  }

  contents = await ds.fetch()

  return contents
}

export const queryNuxtContentForTags = async (
  urlParam: string,
  locale: string,
  $content: Context['$content'],
): Promise<ITaxonomyHuman[]> => {
  const out: ITaxonomyHuman[] = []
  if (!locale.includes('-')) {
    const message = `Invalid 2nd argument ${locale}, it must be a locale, with a dash`
    throw new Error(message)
  }
  const langCode = locale.split('-')[0]
  const ds = $content(`taxonomy/${urlParam}/${langCode}`)
  const contents: IResult = await ds.fetch()
  const human = extractTaxonomyHuman(contents)
  out.push(...human)
  return out
}

export const nuxtPageAsyncDataForTaxonomyIndex = async (
  taxonomyPredicateKey: string = 'tags',
  urlParam: string = 'tag',
  ctx: Context,
) => {
  const itemsSet = new Set<string>()
  const locale = 'fr-CA'
  const human: ITaxonomyHuman[] = []
  const humanData = await queryNuxtContentForTags(
    urlParam,
    locale,
    ctx.$content,
  )
  if (humanData) {
    human.push(...humanData)
  }

  let contents: INuxtContentResult[] = []
  contents = await ctx
    .$content('blog', { deep: true })
    .sortBy('createdAt', 'desc')
    .only(taxonomyPredicateKey)
    .fetch()

  for (const content of contents) {
    if (
      taxonomyPredicateKey in content &&
      Array.isArray(content[taxonomyPredicateKey])
    ) {
      for (const item of content[taxonomyPredicateKey]) {
        itemsSet.add(item)
      }
    }
  }
  const collection = toTaxonomyItemCollection(itemsSet)
  const items: ITaxonomyItem[] = hydrateTaxonomyCollection(collection, human)
  return {
    items,
  }
}

export const nuxtPageAsyncDataForTaxonomyList = async (
  taxonomyPredicateKey: string = 'tags',
  urlParam: string = 'tag',
  ctx: Context,
) => {
  const taxonomyKey = ctx.params[urlParam]
  const itemsSet = new Set<string>([taxonomyKey])
  const locale = 'fr-CA'
  const human: ITaxonomyHuman[] = []
  const humanData = await queryNuxtContentForTags(
    urlParam,
    locale,
    ctx.$content,
  )
  if (humanData) {
    human.push(...humanData)
  }
  const collection = toTaxonomyItemCollection(itemsSet)
  const items: ITaxonomyItem[] = hydrateTaxonomyCollection(collection, human)
  const taxonomy = items[0]
  // We are certain that the taxonomy.key is normalized, we should do the same from
  // when taking the source front matter tags, normalize them the same way as we do here
  const $contains = taxonomy.key
  /**
   * Figuring out how to list when has tag string
   * with same text content, case-insensITiVe.
   *
   * Bookmarks:
   * - https://github.com/nuxt/content/issues/577#
   * - https://github.com/techfort/LokiJS/wiki/Query-Examples#find-queries
   */
  const predicate = {
    [taxonomyPredicateKey]: { $contains },
  } as any
  let contents: INuxtContentResult[] = []
  const maybe: INuxtContentResult[] = await ctx
    .$content('blog', {
      deep: true,
    })
    .where(predicate)
    .sortBy('createdAt', 'desc')
    .fetch()
  contents = Array.isArray(maybe) ? maybe : ([] as INuxtContentResult[])
  return {
    contents,
    taxonomyKey,
    taxonomy,
  }
}
