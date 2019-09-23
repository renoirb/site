import { ActionTree, ActionContext, MutationTree, GetterTree } from 'vuex'

import { RootState } from '../types'

import {
  Post,
  ArticleContentStorePayload,
  ArticleMetadataStorePayload,
  SlugInterface,
} from '~/lib/models'

/**
 * Blog Vuex Store State
 *
 * Thank you SO MUCH, Al-Un, your article has been MUCH HELPFUL!
 *
 * https://github.com/Al-un/learn-nuxt-ts/blob/master/store/polls/types.ts
 * https://medium.com/@Al_un/nuxt-vuex-jest-tested-powered-by-typescript-70441600ef39
 */

export { Post, ArticleContentStorePayload, ArticleMetadataStorePayload }

export interface BlogState {
  selected: string
  items: Post[]
}

/**
 * Create a type to save some characters:
 * SO link for type alias: https://stackoverflow.com/a/28343437/4906586
 */
export type BlogActionContext = ActionContext<BlogState, RootState>

export interface BlogActions extends ActionTree<BlogState, RootState> {
  select: (ctx: BlogActionContext, slug: string) => void
  hydrate: (ctx: BlogActionContext) => void
  load: (ctx: BlogActionContext, item: SlugInterface) => void
}

export interface BlogMutations extends MutationTree<BlogState> {
  SELECT: (state: BlogState, slug: string) => void
  SET: (state: BlogState, items: Post[]) => void
  CONTENT: (state: BlogState, payload: ArticleContentStorePayload) => void
  META: (state: BlogState, payload: ArticleMetadataStorePayload) => void
}

/**
 * If BlogGetters would be empty, we'd use type instead of interface
 *
 * ```ts
 * export type BlogGetters = GetterTree<BlogState, RootState>
 * ```
 */

export interface BlogGetters extends GetterTree<BlogState, RootState> {
  currentlySelected: (state: BlogState) => Post
  selectedMonthAndYear: (
    state: BlogState,
  ) => (year: number, month: number) => Post[]
}
