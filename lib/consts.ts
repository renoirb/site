import { trimText } from './runtime'

/**
 * This file is imported by any part of the project build
 * so if it's a build too, you can safely import that file.
 * Also, make sure not to import anything.
 */

/**
 * RegExp to ensure baseUrl has no trailing slash
 */
export const RE_BASE_URL = /^https?:\/\/[a-z0-9\-_.]+(?::\d+)?$/i

/**
 * RegExp to check whether it is a blog index or reading one
 */
export const RE_FULL_PATH_BLOG_INDEX = /^\/blog(?:\/tag)?(?:\/\d{4})?(?:\/\d{2})?$/i

/**
 * Store static asset in separate GitHub gh-pages repo, here is the public origin.
 */
export const PUBLIC_SITE_ASSETS_ORIGIN = 'https://renoirb.github.io/site-assets'

/**
 * Fallback image
 */
export const FALLBACK_BLANK_IMAGE = trimText`
data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMA
AAAl21bKAAAAA1BMVEUhR2EbeJkBAAAAAXRSTlPM0jRW/QAAAApJREFUeJ
xjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=
`

/**
 * Where this site will be hosted as
 */
export const PUBLIC_BASE_URL = 'https://renoirb.com'

export const FALLBACK_LOCALE = 'en-CA'

export const FALLBACK_LANG_CODE = FALLBACK_LOCALE.split('-')[0]

export const FALLBACK_TODAY_DATE = new Date().toISOString()

/**
 * When is something published before might be considered
 * out of date?
 */
export const YEAR_CONSIDERED_OLD = 2017

export const PRODUCTION_BASE_PATH = '/site'

export const IS_CI =
  ('IS_CI' in process.env && typeof process.env.IS_CI === 'string') ||
  'GITHUB_ACTION' in process.env
