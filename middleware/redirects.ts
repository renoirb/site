import { Context } from 'nuxt'
import { createMaybeRedirectTo } from '../lib'

const redirects: [RegExp, string, true?][] = [
  [
    /^\/projets\/les-arnaques-sur-internet\/type-descroquerie-sur-le-web-faire-du-bruit-pour-avoir-des-vues-de-page-de-medias-sociaux/i,
    '/projects/type-descroquerie-sur-le-web-faire-du-bruit-pour-avoir-des-vues-de-page-de-medias-sociaux',
  ],
  // TODO: Figure out how to replace
  [/^\/projets/i, '/projects', true],
]

const maybeRedirectTo = createMaybeRedirectTo(redirects)

export default (ctx: Context) => {
  const { route = { path: '' } } = ctx
  const maybeRedirectPath = maybeRedirectTo(redirects, route)
  if (maybeRedirectPath) {
    return ctx.redirect(maybeRedirectPath)
  }
}
