import { Context } from '@nuxt/types'

/**
 * Initial state.
 *
 * @TODO
 * - Make preferences side-bar for locale, colorMode.
 *   But we will need to make static pages that are without locale to
 *   take it into account, or just fallback to english, and add locale per article
 */
export default (ctx: Context) => {
  if (ctx && ctx.app.$colorMode && ctx.app.$colorMode.preference) {
    ctx.app.$colorMode.preference = 'light'
  }
}
