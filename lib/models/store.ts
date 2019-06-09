import { Post } from './post'

export { Post }

// tslint:disable-next-line: no-empty-interface
export interface StoreStateRoot {}

export interface StoreStatePosts {
  selected: string
  items: Post[]
}
