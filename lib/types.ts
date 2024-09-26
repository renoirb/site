import type { MetaInfo } from 'vue-meta'

export type Flatten<T> = T extends any[] ? T[number] : T

export type RefreshMetaInfo = {
  content: string
  hid: string
  'http-equiv': 'refresh'
}

export type IVueMetaHeadMetaInfoArray = Pick<MetaInfo, 'meta'>['meta']

export type IVueMetaHeadLinkArray = Pick<MetaInfo, 'link'>['link']

export interface IAppIdentity {
  email: string
  name: string
  description: string
  homepage: string
  version: string
}

export interface CreateVueMetaInfoOptions {
  locale: string
  title: string
  description?: string
  keywords?: string[]
  redirect?: string
}
