import { Context } from 'nuxt'

const redirects: [RegExp, string, true?][] = [
  [/^\/cv$/i, '/resume'],
  [/^\/cv\/detailed$/i, '/resume/detailed'],
  [
    /^\/projets\/les-arnaques-sur-internet\/type-descroquerie-sur-le-web-faire-du-bruit-pour-avoir-des-vues-de-page-de-medias-sociaux/i,
    '/projects/type-descroquerie-sur-le-web-faire-du-bruit-pour-avoir-des-vues-de-page-de-medias-sociaux',
  ],
  // TODO: Figure out how to replace
  [/^\/projets/i, '/projects', true],
]

const maybeRedirectMatch = (routePath: string): false | string => {
  const hasRedirect = redirects.find((m) => m[0].test(routePath))
  let out: false | string = false
  if (hasRedirect && Array.isArray(hasRedirect) && hasRedirect[1]) {
    let redirectTo = hasRedirect[1]
    if (hasRedirect[2] === true) {
      const rewritten = routePath.replace(hasRedirect[0], hasRedirect[1])
      redirectTo = rewritten
    }
    out = redirectTo
  }
  return out
}

export default (ctx: Context) => {
  const { route = { path: '' } } = ctx
  const maybeRedirectPath = maybeRedirectMatch(route.path)
  if (maybeRedirectPath) {
    return ctx.redirect(maybeRedirectPath)
  }
}
