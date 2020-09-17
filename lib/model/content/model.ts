import { Result } from '@nuxt/content'

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
  date: string
}

export type INuxtContentIndexResult = Pick<
  INuxtContentResult,
  'title' | 'date' | 'slug' | 'locale' | 'path'
>

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
