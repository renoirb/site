import { AxiosInstance } from 'axios'

import {
  Post,
  BlogActions,
  ArticleContentStorePayload,
  ArticleMetadataStorePayload,
} from './types'

import { SlugInterface, postFetchService } from '~/lib/models'
import { extractFrontMatter, extractMarkdown } from '~/lib/article-reader'

export const actions: BlogActions = {
  async select({ commit }, slug: string = '') {
    commit('SELECT', slug)
  },

  async hydrate({ commit, state }) {
    const isHydrated = state.items.length > 0
    if (!isHydrated) {
      const fetch = postFetchService(this.$axios as AxiosInstance)
      const items: Post[] = await fetch()
      commit('SET', items)
    }
  },

  async load({ commit }, item: SlugInterface) {
    const { slug = '' } = item
    const dataSource = `/articles/blog/${slug}`
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
    commit('CONTENT', payload)
    commit('META', meta)
  },
}

export default actions
