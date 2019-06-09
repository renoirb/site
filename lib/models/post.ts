import { Article } from './article'
import { Category } from './category'
import { Tag } from './tag'

export interface Post extends Article {
  readonly categories?: Category[]
  readonly date?: string
  readonly featured?: boolean
  readonly published?: boolean
  readonly tags?: Tag[]
  readonly title?: string
  readonly publishedAt?: Date
}
