import { AxiosInstance } from 'axios'

import {
  axiosTextCsvResponseHandler,
  createAxiosRequestConfig,
  axiosTextCsvResponseTransformer,
} from '~/lib/runtime/axios'

import { csvToSlugCollection } from '~/lib/csv'

import { Article, ArticleType } from './article'
import { Category } from './category'
import { Tag } from './tag'

export class Post extends Article {
  readonly type: ArticleType = 'post'

  readonly categories?: Category[]
  readonly date?: string
  readonly featured?: boolean
  readonly published?: boolean
  readonly tags?: Tag[]
  readonly publishedAt?: Date

  constructor(readonly slug: string, readonly path: string) {
    super(slug, path)
  }
}

export const postFetchService = (
  httpClient: AxiosInstance
) => async (): Promise<Post[]> => {
  const where = '/articles/blog.csv'
  const requestConfig = createAxiosRequestConfig('GET', where)
  requestConfig.addTransformer(axiosTextCsvResponseTransformer)
  const toCollection = csvToSlugCollection('post')
  const items = await httpClient
    .request(requestConfig)
    .then(axiosTextCsvResponseHandler)
    .then(({ data }) => toCollection(data))

  // @ts-ignore
  return items
}
