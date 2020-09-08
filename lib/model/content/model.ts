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
