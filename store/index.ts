import { PostsState } from './posts'

/**
 * related:
 * - https://github.com/nuxt-community/nuxt-property-decorator
 * - https://nuxtjs.org/examples/typescript-vuex
 * - https://github.com/nuxt-community/typescript-template/blob/master/template/store/index.ts
 * - https://github.com/nuxt-community/hackernews-nuxt-ts/issues/11
 *
 * next?:
 * - https://gist.github.com/mrcrowl/d7fd8d0369759a9fe315dbf27dc1bced
 * - https://github.com/championswimmer/vuex-module-decorators/issues/80#issuecomment-493786726
 * - https://championswimmer.in/vuex-module-decorators/
 */

export const strict = true

export interface RootState {
  posts: PostsState
}

export const state = () => ({})

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('posts/hydrate')
  },
}
