export interface NuxtRouteInterface {
  name: string
  path: string
  component?: string
  children?: NuxtRouteInterface[]
}

export interface VueRouterLocationQueryParamsInterface {
  [key: string]: string | number | boolean
}

/**
 * ```js
 * { path: 'register', query: { plan: 'private' }}
 * { name: 'user', params: { userId: 123 }}
 * ```
 *
 * https://router.vuejs.org/api/#to
 */
export interface VueRouterLocationInterface {
  name?: string
  path: string
  query?: VueRouterLocationQueryParamsInterface
  params?: VueRouterLocationQueryParamsInterface
}
