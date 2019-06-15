export interface VueRouterPropertyDictionary {
  [key: string]: string | number | boolean
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
export interface VueRouterLocationInterface {
  name?: string
  path: string
  query?: VueRouterPropertyDictionary
  params?: VueRouterPropertyDictionary
  props?: VueRouterPropertyDictionary
  meta?: VueRouterPropertyDictionary
}
