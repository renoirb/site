import {
  BlogMutations,
  ArticleContentStorePayload,
  ArticleMetadataStorePayload,
} from './types'

export const mutations: BlogMutations = {
  SELECT: (state, slug: string = '') => {
    state.selected = slug
  },

  SET: (state, items = []) => {
    state.items = items
  },

  CONTENT: (state, payload: ArticleContentStorePayload) => {
    const article = state.items.find(a => a.slug === payload.slug)
    if (article) {
      article.content = payload.content
    }
  },

  META: (state, payload: ArticleMetadataStorePayload) => {
    const article = state.items.find(a => a.slug === payload.slug)
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

export default mutations
