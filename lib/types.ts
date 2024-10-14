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
  timeZone: string
}

export interface CreateVueMetaInfoOptions {
  locale: string
  title: string
  description?: string
  keywords?: string[]
  redirect?: string
}

/**
 * Almost all HTML tag names.
 */
export type GolbalHTMLElementTagName =
  | 'p'
  | 'a'
  | 'ul'
  | 'li'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'img'
  | 'strong'
  | 'del'
  | 'ol'
  | 'dl'
  | 'dt'
  | 'dd'
  | 'small'
  | 'time'
  | 'abbr'
  | 'iframe'
  | 'details'
  | 'summary'

export type VueNodeTag =
  | 'nuxt-link'
  | 'app-image'
  | 'rb-notice-box'
  | GolbalHTMLElementTagName

export type VueNodeType = 'element' | 'text' | 'root' | unknown

export type VueRenderTreeNonRoot =
  | {
      type: 'element'
      tag: VueNodeTag
      props: Record<string, string>
      children: VueRenderTreeNonRoot[]
    }
  | {
      type: 'text'
      value: string
    }

export type VueRenderTreeRoot = {
  type: 'root'
  children: VueRenderTreeNonRoot[]
}

export type VueRenderTree = VueRenderTreeRoot | VueRenderTreeNonRoot

/**
 * What Nuxt content internally uses when transforming files.
 */
export interface INuxtContentParsedDocument {
  body: VueRenderTreeRoot
  text?: string
}
