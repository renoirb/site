import { MetaInfo } from 'vue-meta'

export type IVueMetaHeadMetaInfoArray = Pick<MetaInfo, 'meta'>['meta']

export type IVueMetaHeadLinkArray = Pick<MetaInfo, 'link'>['link']

export interface IAppIdentity {
  email: string
  name: string
  description: string
  homepage: string
  version: string
}

export const fromProcessEnvToAppIdentity = (
  penv: NodeJS.ProcessEnv,
): IAppIdentity => {
  /* eslint-disable camelcase */
  const {
    npm_package_author_email = 'renoir.boulanger@example.org',
    npm_package_author_name = 'Renoir Boulanger',
    npm_package_description = '',
    npm_package_homepage = 'https://github.com/renoirb/site',
    npm_package_version = '1.0.0',
  } = penv || {}
  return {
    email: npm_package_author_email,
    name: npm_package_author_name,
    description: npm_package_description,
    homepage: npm_package_homepage,
    version: npm_package_version,
  }
}
