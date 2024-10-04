import { Context } from '@nuxt/types'
import { getColorModeClassName } from '../lib'

/**
 * Initial state.
 *
 * @TODO
 * - Make preferences side-bar for locale, colorMode.
 *   But we will need to make static pages that are without locale to
 *   take it into account, or just fallback to english, and add locale per article
 */
export default (ctx: Context) => {
  const colorModeClassName = getColorModeClassName(ctx)
  if (ctx && ctx.app.$colorMode && ctx.app.$colorMode.value) {
    if (ctx.app.head) {
      if (
        'htmlAttrs' in ctx.app.head &&
        Array.isArray(ctx.app.head.htmlAttrs)
      ) {
        ctx.app.head.htmlAttrs.push(colorModeClassName)
      }
    }
  }
}
