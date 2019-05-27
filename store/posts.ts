import { MutationTree, ActionTree } from 'vuex'
import { RootState } from '.'
import { Post } from '~/types'

export const strict = true
export const namespaced = true

export const name = 'posts'

export const types = {
  SELECT: 'SELECT',
  SET: 'SET',
}

export interface PostsState {
  selected: string
  posts: Post[]
}

export const state = (): PostsState => ({
  selected: '',
  posts: [],
})

export const getters = {
  // tslint:disable-next-line:no-shadowed-variable no-any
  currentlySelected: state => {
    const p = (state.posts as Post[]).find(item => item.slug === state.selected)
    return p ? p : { slug: '...' }
  },
}

export const actions: ActionTree<PostsState, RootState> = {
  select({ commit }, slug: string) {
    commit(types.SELECT, slug)
  },
  // tslint:disable-next-line:no-shadowed-variable no-any
  async hydrate({ commit, state }) {
    const isHydrated = state.posts.length > 0
    if (!isHydrated) {
      const posts: Post[] = []
      // @ts-ignore
      const lines: string[] = await this.$axios.$get('./blog/index.csv')
      lines.forEach(slug => {
        const p: Post = { slug }
        posts.push(p)
      })
      commit(`${types.SET}`, posts)
    }
  },
}

export const mutations: MutationTree<PostsState> = {
  // tslint:disable-next-line:no-shadowed-variable no-any
  [types.SELECT](state: PostsState, slug: string = '') {
    state.selected = slug
  },
  // tslint:disable-next-line:no-shadowed-variable no-any
  [types.SET](state: PostsState, items: Post[]): void {
    state.posts = items
  },
}
