import { Context } from '@nuxt/types'
import { RE_FULL_PATH_BLOG_INDEX } from '../consts'
import { transformToPrettyfiedTemporalDate } from './date'

export const getColorModeClassName = (ctx: Context): string => {
  const colorMode = ctx.app.$colorMode.value
  const colorModeClassName = `${colorMode || 'light'}-mode`
  return colorModeClassName
}

export const pageTitleForBlogIndex = (
  route: Context['route'],
): string | null => {
  let out: null | string = null
  if (route.fullPath && RE_FULL_PATH_BLOG_INDEX.test(route.fullPath)) {
    const locale = 'en-CA'

    const dtfo: Intl.DateTimeFormatOptions = {
      month: 'long',
    }
    const prettyfiedTemporalDate = transformToPrettyfiedTemporalDate(
      route.params,
      locale,
      dtfo,
    )

    const prettified =
      'prettified' in prettyfiedTemporalDate &&
      prettyfiedTemporalDate.prettified
        ? prettyfiedTemporalDate.prettified
        : ''
    let pageTitle = ''
    if (prettified) {
      const publishedIn = locale.startsWith('fr') ? 'Publié en' : 'Published in'
      pageTitle = `${publishedIn} ${prettified}`
    }

    out = pageTitle
  }

  return out
}
