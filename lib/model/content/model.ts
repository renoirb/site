import { Result } from '@nuxt/content'

export interface INuxtContentResult extends Result {
  title: string
  slug: string
  path: string
  tags: string[]
  categories: string[]
  locale: string
  date: Date | string
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
