import { Context } from '@nuxt/types'
import type {
  Result as IResult,
  NuxtContentInstance as INuxtContentInstance,
} from '@nuxt/content'
import type { IPrettyfiedTemporalDate } from '../date'
import type { ITaxonomyHuman } from '../taxonomy'
import { extractTaxonomyHuman } from '../tag'
import type { IFrontMatterInnerDocument } from './front-matter-inner-document'

export type INuxtContentResolver = (
  $content: INuxtContentInstance,
) => Promise<IBaseNuxtContentResult[]>

export interface IBaseNuxtContentResult extends IResult {
  createdAt: string
  dir: string
  extension: string
  path: string
  slug: string
  updatedAt: string
}

export interface INuxtContentResult extends IBaseNuxtContentResult {
  canonical?: string
  preamble?: IFrontMatterInnerDocument
  categories: string[]
  cover?: string
  coverAlt?: string
  coverCaption?: string
  date: string
  locale: string
  oldArticle?: string
  tags: string[]
  title: string
}

export type INuxtContentPrevNext = Pick<
  INuxtContentResult,
  'locale' | 'path' | 'title'
>

export interface INuxtContentIndexResult
  extends Pick<
    INuxtContentResult,
    'createdAt' | 'date' | 'locale' | 'path' | 'slug' | 'title'
  > {
  prettyfiedTemporalDate?: IPrettyfiedTemporalDate
}

export const isNuxtContentResult = (
  maybe: any,
): maybe is INuxtContentResult => {
  let outcome = false
  const hasTitle =
    Reflect.has(maybe, 'title') && typeof maybe.title === 'string'
  const hasLocale =
    Reflect.has(maybe, 'locale') && typeof maybe.locale === 'string'
  const hasTags = Reflect.has(maybe, 'tags') && Array.isArray(maybe.tags)
  if (maybe && hasTitle && hasLocale && hasTags) {
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
  let ds = $content('blog', { deep: true })
    .sortBy('createdAt', 'desc')
    .only(['createdAt', 'date', 'locale', 'path', 'slug', 'tags', 'title'])
  if (q) {
    ds = ds.search(q)
  }

  contents = await ds.fetch()

  return contents
}

export const queryNuxtContentForTags = async (
  $content: Context['$content'],
  locale: string,
): Promise<ITaxonomyHuman[]> => {
  const out: ITaxonomyHuman[] = []
  const langCode = locale.split('-')[0]
  const ds = $content(`taxonomy/tag/${langCode}`)
  const contents: IResult = await ds.fetch()
  const human = extractTaxonomyHuman(contents)
  out.push(...human)
  return out
}
