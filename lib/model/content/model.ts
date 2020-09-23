import { Result } from '@nuxt/content'
import { Context } from '@nuxt/types'
import { IPrettyfiedTemporalDate } from '../date'

export interface IBaseNuxtContentResult extends Result {
  dir: string
  path: string
  extension: string
  slug: string
  createdAt: string
  updatedAt: string
}

export interface INuxtContentResult extends IBaseNuxtContentResult {
  title: string
  tags: string[]
  categories: string[]
  locale: string
  oldArticle?: string
  cover?: string
  coverCaption?: string
  coverAlt?: string
  date: string
}

export interface INuxtContentIndexResult
  extends Pick<
    INuxtContentResult,
    'title' | 'date' | 'slug' | 'locale' | 'path' | 'createdAt'
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
