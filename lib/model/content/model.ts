import { Result } from '@nuxt/content'

export interface INuxtContentResult extends Result {
  title: string
  slug: string
  path: string
  date: Date | string
}
