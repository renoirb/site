import { MutationTree, ActionTree } from 'vuex'
import {
  StoreStateRoot,
  StoreStatePosts,
  Post,
  Article,
  ArticleContentStorePayload,
  ArticleMetadataStorePayload,
} from '~/lib/models/store'
import { csvToSlugCollection } from '~/lib/csv'
import { extractFrontMatter, extractMarkdown } from '~/lib/article-reader'
import {
  axiosTextCsvResponseHandler,
  createAxiosRequestConfig,
  axiosTextCsvResponseTransformer,
} from '~/lib/runtime/axios'

export { Post }

export const strict = true
export const namespaced = true

export const name = 'posts'

const base = 'blog'

export const types = {
  CONTENT: 'CONTENT',
  SELECT: 'SELECT',
  META: 'META',
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
  currentlySelected: gettersStateCurrentlySelected => {
    const items: Post[] = gettersStateCurrentlySelected.items
    const selected: string = gettersStateCurrentlySelected.selected
    const foundItem = items.find(item => item.slug === selected)
    return foundItem ? foundItem : { slug: '' }
  },
  selectedMonthAndYear: gettersStateSelectedMonthAndYear => (
    year: number,
    month: number
  ): Post[] => {
    const items: Post[] = gettersStateSelectedMonthAndYear.items
    return items.filter(
      item => item.dateTuple[0] === year && item.dateTuple[1] === month
    )
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
      const where = '/articles/blog.csv'
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

  async read({ commit }, article: Article) {
    const slug = article.slug
    const dataSource = `/articles/${base}/${slug}`
    const recv = await (this as any).$axios.$get(dataSource)
    const [fm, firstLine] = extractFrontMatter(recv)
    const content = extractMarkdown(recv, firstLine)
    const { title = '' } = fm
    const meta: ArticleMetadataStorePayload = { slug, ...fm }
    const payload: ArticleContentStorePayload = {
      content,
      slug,
      title,
    }
    commit(`${types.CONTENT}`, payload)
    commit(`${types.META}`, meta)
  },
}

export const mutations: MutationTree<StoreStatePosts> = {
  // tslint:disable-next-line:no-shadowed-variable no-any
  [types.SELECT](mutationStateArg: StoreStatePosts, slug: string = '') {
    mutationStateArg.selected = slug
  },
  // tslint:disable-next-line:no-shadowed-variable no-any
  [types.SET](mutationStateArg: StoreStatePosts, items: Post[]): void {
    mutationStateArg.items = items
  },
  [types.CONTENT](
    mutationStateArg: StoreStatePosts,
    payload: ArticleContentStorePayload
  ): void {
    const article = mutationStateArg.items.find(a => a.slug === payload.slug)
    if (article) {
      article.content = payload.content
    }
  },
  [types.META](
    mutationStateArg: StoreStatePosts,
    payload: ArticleMetadataStorePayload
  ): void {
    const article = mutationStateArg.items.find(a => a.slug === payload.slug)
    if (article) {
      for (const [key, valueObj] of Object.entries(payload)) {
        const hasKey = Reflect.has(article, key) && key !== 'slug'
        if (hasKey) {
          article[key] = JSON.parse(JSON.stringify(valueObj))
        }
      }
    }
  },
}
