import { Location } from 'vue-router'
import { Context } from '@nuxt/types'

export type IVueRouterRecord = Record<string, string | number | boolean>

export interface INuxtContextIsserTriplet extends Context {
  isStatic: boolean
  isDev: boolean
}

/**
 * ```js
 * { path: 'register', query: { plan: 'private' }}
 * { name: 'user', params: { userId: 123 }}
 * ```
 *
 * https://router.vuejs.org/api/#to
 * https://github.com/vuejs/vue-router/blob/dev/src/util/location.js
 */
export type IVueRouterLocation = Location

const ROUTER_LOCATION_KEYS = new Set([
  'name',
  'path',
  'hash',
  'query',
  'params',
  'append',
  'replace',
  // TODO, improve this and remove?
  '__ob__',
  'false',
])

export const isKeyOfVueRouterLocation = (
  input: string,
): input is keyof IVueRouterLocation => {
  return ROUTER_LOCATION_KEYS.has(input)
}

export const assertOnlyHasKeysOfVueRouterLocation = (
  input: unknown,
): asserts input is IVueRouterLocation => {
  const all = Object.getOwnPropertyNames(input)
  const validating: [string, boolean][] = all.map((k) => [
    k,
    isKeyOfVueRouterLocation(k),
  ])
  const faultyKeys = validating.filter(([_, isserVal]) => isserVal === false)
  if (faultyKeys.length > 0) {
    const f = faultyKeys.join(',')
    const message = `
      Invalid argument, we expected a vue-router Location, we got unexpected keys ${f}
    `.trim()
    throw new TypeError(message)
  }
}

export const isVueRouterLocation = (
  input: unknown,
): input is IVueRouterLocation => {
  const { path } = input as IVueRouterLocation
  const hasPath = typeof path === 'string'
  let out: boolean = hasPath
  try {
    const _ = assertOnlyHasKeysOfVueRouterLocation(input as unknown)
  } catch (e) {
    out = false
  }

  return hasPath
}
