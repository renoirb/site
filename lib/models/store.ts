import { Post } from './post'
import { Article } from './article'

export { Post, Article }

export interface ArticleContentStorePayload {
  readonly content: string
  readonly slug: string
  readonly title: string
}

export interface ArticleMetadataStorePayload {
  readonly slug: string
  readonly [key: string]: string[] | boolean | string | number
}

// tslint:disable-next-line: no-empty-interface
export interface StoreStateRoot {}

export interface StoreStatePosts {
  selected: string
  items: Post[]
}
