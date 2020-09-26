import { Context } from '@nuxt/types'
import { RE_FULL_PATH_BLOG_INDEX } from '../consts'
import { transformToPrettyfiedTemporalDate } from './date'

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
    const { prettified = '...' } = prettyfiedTemporalDate

    const publishedIn = locale.startsWith('fr') ? 'Publié en' : 'Published in'
    const pageTitle = `${publishedIn} ${prettified}`

    out = pageTitle
  }

  return out
}
