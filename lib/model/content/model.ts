import { Result } from '@nuxt/content'
import { Context, NuxtOptions } from '@nuxt/types'
import { IPrettyfiedTemporalDate } from '../date'

export interface IBaseNuxtContentResult extends Result {
  createdAt: string
  dir: string
  extension: string
  path: string
  slug: string
  updatedAt: string
}

export interface INuxtContentParsedTreeChild {
  type: string | 'element'
  tag: string | 'p' | 'nuxt-link' | 'li'
  props: Record<string, string>
}
export interface INuxtContentParsedTreeTextNode {
  type: 'text'
  value: string
}
export type INuxtContentParsedTreeChidren = (
  | INuxtContentParsedTreeTextNode
  | INuxtContentParsedTreeChidren
)[]

/**
 * What Nuxt content internally uses when transforming files.
 */
export interface INuxtContentParsedTreeRoot {
  type: 'root'
  children: INuxtContentParsedTreeChidren
}

/**
 * Where on a page should we insert the following content
 */
export type IDocumentMetaSlot = 'app-very-old-article'

export interface IDocumentMeta {
  slot: IDocumentMetaSlot
  /**
   * Markdown contents that will be parsed by Nuxt Content
   * and be used inside the slot contents.
   */
  markdown?: string
  /**
   * Following Nuxt Content's rendering pattern.
   * What's in markdown property transformed for rendering.
   */
  body?: INuxtContentParsedTreeRoot
}

export interface INuxtContentResult extends IBaseNuxtContentResult {
  meta?: IDocumentMeta[]
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

type INuxtContentToJsonFn = Record<
  'toJSON',
  (raw: string) => IBaseNuxtContentResult
>

/**
 * Bookmarks:
 * - https://github.com/nuxt/content/blob/%40nuxt/content%401.8.0/packages/content/lib/database.js#L22-L25
 */
export interface NuxtContentDatabase {
  markdown: INuxtContentToJsonFn
  yaml: INuxtContentToJsonFn
  csv: INuxtContentToJsonFn
}

type INuxtOptionsHooks = NuxtOptions['hooks']

/**
 * Bookmarks:
 * - https://content.nuxtjs.org/advanced/#contentfilebeforeinsert
 */
export interface NuxtOptionsHooks extends INuxtOptionsHooks {
  'content:file:beforeInsert': (
    document: INuxtContentResult,
    database: NuxtContentDatabase,
  ) => void
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

export type INuxtContentIndexResultByYears = [
  number,
  INuxtContentIndexResult[],
][]

export const typeGuardNuxtContentResult = (
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
