import { Context } from 'nuxt'
import { createMaybeRedirectTo } from '../lib'

const redirects: [RegExp, string, true?][] = [
  [
    /^\/projets\/les-arnaques-sur-internet/i,
    '/projects/les-arnaques-sur-internet',
  ],
  [
    /^\/projets\/les-arnaques-sur-internet\/type-descroquerie-sur-le-web-faire-du-bruit-pour-avoir-des-vues-de-page-de-medias-sociaux/i,
    '/projects/type-descroquerie-sur-le-web-faire-du-bruit-pour-avoir-des-vues-de-page-de-medias-sociaux',
  ],
]

const maybeRedirectTo = createMaybeRedirectTo(redirects)

export default (ctx: Context) => {
  const { route = { path: '' } } = ctx
  const maybeRedirectPath = maybeRedirectTo(route)
  if (maybeRedirectPath) {
    return ctx.redirect(maybeRedirectPath)
  }
}
