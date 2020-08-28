import { NuxtContentInstance, Result } from '@nuxt/content'

export interface IInventoryContentQuery {
  baseUrl
}

const defaultParams: IInventoryContentQuery = {
  baseUrl: 'http://localhost:3000',
}

export const createFeedArticles = async (
  $content: NuxtContentInstance,
  params: Partial<IInventoryContentQuery> = {},
): Promise<Result | Result[]> => {
  const paramsWithDefaults: IInventoryContentQuery = {
    ...defaultParams,
    ...params,
  }
  const documents = await $content.fetch()
  return documents
}
