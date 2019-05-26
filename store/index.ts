import { ActionTree, MutationTree } from 'vuex'
import { Post, RootState } from '~/types'

// @ts-ignore
import postsCsv = require('~/static/blog/index.csv')

export const state = (): RootState => ({
  posts: [],
})

export const mutations: MutationTree<RootState> = {
  setPosts(rootState: RootState, posts: Post[]): void {
    rootState.posts = posts
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }, context) {
    const { isStatic = false, app } = context
    const posts: Post[] = []

    // If you serve the site statically with `nuxt generate`, you can't use HTTP requests for local
    const lines = isStatic
      ? postsCsv
      : await app.$axios.$get('./blog/index.csv')

    lines.forEach(slug => {
      const p: Post = { slug }
      posts.push(p)
    })

    commit('setPosts', posts)
  },
}
