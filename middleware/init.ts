import { Context } from '@nuxt/types'
// import Vue from 'vue'
import { pageTitleForBlogIndex } from '../lib'

/**
 * Initial state.
 *
 * @TODO
 * - Make preferences side-bar for locale, colorMode.
 *   But we will need to make static pages that are without locale to
 *   take it into account, or just fallback to english, and add locale per article
 */
export default (ctx: Context) => {
  const toColorMode = (mode: string = 'light'): string => `${mode}-mode`
  let colorModeClassName = toColorMode()
  const pageTitle = pageTitleForBlogIndex(ctx.route)
  if (ctx && ctx.app.$colorMode && ctx.app.$colorMode.value) {
    const colorMode = ctx.app.$colorMode.value
    colorModeClassName = toColorMode(colorMode)
    if (ctx.app.head) {
      if (
        'htmlAttrs' in ctx.app.head &&
        Array.isArray(ctx.app.head.htmlAttrs)
      ) {
        ctx.app.head.htmlAttrs.push(colorModeClassName)
      }
      if ('title' in ctx.app.head && typeof pageTitle === 'string') {
        // eslint-disable-next-line
        console.debug('what-gets-executed-7: ctx.app.head', ctx.app.head)
        ctx.app.head.title = pageTitle
        // Vue.set(ctx.app, 'data', { ...(ctx.app.data || {}), title: pageTitle })
      }
    }
  }

  // eslint-disable-next-line
  console.debug(
    'what-gets-executed-7: middleware/init',
    pageTitle,
    colorModeClassName,
  )
}
