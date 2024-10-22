import type {
  contentFunc as baseContentFunc,
  NuxtContentInstance,
  Result,
} from '@nuxt/content'
import type { Context as BaseContext } from '@nuxt/types'

/**
 * Nuxt content function typings to help (Renoir’s) memory.
 *
 * Docs:
 * - https://content.nuxt.com/v1/getting-started/fetching#contentpath-options
 *
 * @see baseContentFunc
 */
export type contentFunc = baseContentFunc

/**
 * @see BaseContext
 */
export type Context = BaseContext

/**
 * @see Result
 */
export type IResult = Result

/**
 * @see NuxtContentInstance
 */
export type INuxtContentInstance = NuxtContentInstance
