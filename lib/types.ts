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

export type VueNodeTreeType = 'element' | 'text' | 'root' | unknown

export type VueNodeTreeNonRoot =
  | {
      type: 'element'
      tag: VueNodeTag
      props: Record<string, string>
      children: VueNodeTreeNonRoot[]
    }
  | {
      type: 'text'
      value: string
    }

export type VueNodeTreeRoot = {
  type: 'root'
  children: VueNodeTreeNonRoot[]
}

export type VueNodeTree = VueNodeTreeRoot | VueNodeTreeNonRoot

export interface INuxtContentTableOfContents {
  id: string
  depth: number
  text: string
}

/**
 * What Nuxt content internally uses when transforming files.
 */
export interface INuxtContentParsedDocument {
  body: VueNodeTreeRoot
  text?: string
  toc?: INuxtContentTableOfContents[]
}
