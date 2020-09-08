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
