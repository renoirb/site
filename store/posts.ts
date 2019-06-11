import { MutationTree, ActionTree } from 'vuex'
import { StoreStateRoot, StoreStatePosts, Post } from '~/lib/models/store'
import { csvToSlugCollection } from '~/lib/csv'
import {
  axiosTextCsvResponseHandler,
  createAxiosRequestConfig,
  axiosTextCsvResponseTransformer,
} from '~/lib/runtime/axios'

export { Post }

export const strict = true
export const namespaced = true

export const name = 'posts'

export const types = {
  SELECT: 'SELECT',
  SET: 'SET',
}

export const state = (): StoreStatePosts => ({
  selected: '' /* 'hello-world' */,
  items: [
    /* {slug: 'hello-world', published: true, title: 'Hello World'} */
  ],
})

export const getters = {
  // tslint:disable-next-line:no-shadowed-variable no-any
  currentlySelected: state => {
    const p = (state.items as Post[]).find(item => item.slug === state.selected)
    return p ? p : { slug: '' }
  },
}

export const actions: ActionTree<StoreStatePosts, StoreStateRoot> = {
  select({ commit }, slug: string) {
    commit(types.SELECT, slug)
  },
  // tslint:disable-next-line:no-shadowed-variable no-any
  async hydrate({ commit, state }) {
    const isHydrated = state.items.length > 0
    if (!isHydrated) {
      const where = '/articles/blog/index.csv'
      const requestConfig = createAxiosRequestConfig('GET', where)
      requestConfig.addTransformer(axiosTextCsvResponseTransformer)
      const toCollection = csvToSlugCollection('post')
      // @ts-ignore
      const items = await this.$axios
        .request(requestConfig)
        .then(axiosTextCsvResponseHandler)
        .then(({ data }) => toCollection(data))

      commit(`${types.SET}`, items)
    }
  },
}

export const mutations: MutationTree<StoreStatePosts> = {
  // tslint:disable-next-line:no-shadowed-variable no-any
  [types.SELECT](state: StoreStatePosts, slug: string = '') {
    state.selected = slug
  },
  // tslint:disable-next-line:no-shadowed-variable no-any
  [types.SET](state: StoreStatePosts, items: Post[]): void {
    state.items = items
  },
}
