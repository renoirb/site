import { Article, ArticleType } from './article'
import { Category } from './category'
import { Tag } from './tag'

export class Post extends Article {
  readonly type: ArticleType = 'post'

  readonly categories?: Category[]
  readonly date?: string
  readonly featured?: boolean
  readonly published?: boolean
  readonly tags?: Tag[]
  readonly publishedAt?: Date

  constructor(readonly slug: string, readonly path: string) {
    super(slug, path)
  }
}
