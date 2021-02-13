import { MetaInfo } from 'vue-meta'
import { Context } from '@nuxt/types'

export type IVueMetaHeadMetaInfoArray = Pick<MetaInfo, 'meta'>['meta']

export type IVueMetaHeadLinkArray = Pick<MetaInfo, 'link'>['link']

export interface IAppIdentity {
  email: string
  name: string
  description: string
  homepage: string
  version: string
}

/* eslint-disable camelcase */
const identityFallbackValues: IAppIdentity = {
  email: 'renoir.boulanger@example.org',
  name: 'Renoir Boulanger',
  description: '',
  homepage: 'https://github.com/renoirb/site',
  version: '1.0.0',
} as const

export const fromProcessEnvToAppIdentity = (
  penv: NodeJS.ProcessEnv,
): IAppIdentity => {
  const {
    npm_package_author_email = identityFallbackValues.email,
    npm_package_author_name = identityFallbackValues.name,
    npm_package_description = identityFallbackValues.description,
    npm_package_homepage = identityFallbackValues.homepage,
    npm_package_version = identityFallbackValues.version,
  } = penv || {}
  return {
    email: npm_package_author_email,
    name: npm_package_author_name,
    description: npm_package_description,
    homepage: npm_package_homepage,
    version: npm_package_version,
  }
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
