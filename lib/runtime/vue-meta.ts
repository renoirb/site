import { MetaInfo } from 'vue-meta'
import { Context } from '@nuxt/types'
import type {
  CreateVueMetaInfoOptions,
  Flatten,
  IAppIdentity,
  RefreshMetaInfo,
} from '../types'
import { sanitizeHtmlTagAttributeExpectingOneWord } from '.'

export const identityFallbackValues: IAppIdentity = {
  email: 'hello@renoirboulanger.com',
  name: 'Renoir Boulanger',
  description: '',
  homepage: 'https://github.com/renoirb/site',
  version: '1.0.0',
  timeZone: 'America/New_York',
} as const

export const fromPackageToAppIdentity = (
  pkg: {
    name: string
    version: string
    homepage: string
    description: string
    author: { name: string; email: string }
  },
  timeZone,
): IAppIdentity => {
  const {
    author,
    description = identityFallbackValues.description,
    homepage = identityFallbackValues.homepage,
    version = identityFallbackValues.version,
  } = pkg
  const {
    name = identityFallbackValues.name,
    email = identityFallbackValues.email,
  } = author ?? {}
  const appIdentity = {
    email,
    name,
    description,
    homepage,
    version,
    timeZone: timeZone ?? identityFallbackValues.timeZone,
  } as IAppIdentity
  return appIdentity
}

export const fromNuxtContextToAppIdentity = (ctx: Context): IAppIdentity => {
  const { email, name, description, homepage, version } = ctx.env
  const out: IAppIdentity = {
    ...identityFallbackValues,
    email,
    name,
    description,
    homepage,
    version,
  }
  return out
}

// #TODO-Meta-Equiv-Redirect: USE this logic.
export const createVueMetaInfo = ({
  locale,
  title = '',
  description = '',
  keywords = [],
  redirect = '',
}: CreateVueMetaInfoOptions): MetaInfo => {
  const htmlAttrs: MetaInfo['htmlAttrs'] = {}
  const meta: (Flatten<MetaInfo['meta']> | RefreshMetaInfo)[] = []

  if (typeof locale === 'string' && locale !== '') {
    Reflect.set(htmlAttrs, 'lang', locale)
  }

  const out: MetaInfo = {
    htmlAttrs,
  }

  if (typeof title === 'string' && title !== '') {
    Reflect.set(out, 'title', title)
  }

  if (Array.isArray(keywords) && keywords.length > 0) {
    const content = [...new Set([...keywords])].join(', ')
    meta.push({
      hid: `keywords-${sanitizeHtmlTagAttributeExpectingOneWord(
        content.replace(/[.,]/g, ''),
      )}`,
      name: 'keywords',
      content,
    })
  }

  if (typeof description === 'string' && description !== '') {
    const content = description
    meta.push({
      hid: `description-${sanitizeHtmlTagAttributeExpectingOneWord(
        content.replace(/[.,]/g, ''),
      )}`,
      name: 'description',
      content,
    })
  }

  if (typeof redirect === 'string' && redirect !== '') {
    // <meta http-equiv="refresh" content="0; url=http://example.com/" />
    // See related ../../../../components/global/GitHubPagesRedirect.vue
    const redirectMeta: RefreshMetaInfo = {
      hid: 'refresh',
      'http-equiv': 'refresh',
      content: `5; url=${redirect}`,
      //       ^^^ Redirect quietely to different page.
    }
    meta.push(redirectMeta)
  }

  if (meta.length > 0) {
    Reflect.set(out, 'meta', meta)
  }

  return out
}
