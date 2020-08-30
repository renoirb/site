import { Context } from '@nuxt/types'
import { Route } from 'vue-router'

import { PUBLIC_BASE_URL } from '../consts'
import { IVueRouterLocation, INuxtContextIsserTriplet } from './nuxt'

export type PageRedirect = [RegExp, string, true?]

export type MaybeRedirectToTypeFn = (route: Route) => false | IVueRouterLocation

export const createMaybeRedirectTo = (
  redirects: PageRedirect[],
): MaybeRedirectToTypeFn => (route: Route): false | IVueRouterLocation => {
  const hasRedirect = redirects.find((m) => m[0].test(route.path))
  let out: false | IVueRouterLocation = false
  if (hasRedirect && Array.isArray(hasRedirect) && hasRedirect[1]) {
    let path = hasRedirect[1]
    if (hasRedirect[2] === true) {
      path = route.path.replace(hasRedirect[0], hasRedirect[1])
    }
    out = { path } as IVueRouterLocation
  }
  return out
}

/**
 * We are trying to provide the following behavior:
 *
 * 1. When dev mode: use middleware to redirect
 * 2. When static build (and for the desired build output): Serve an HTML file with redirect
 */
export const createIsStaticBuildRuntime = (
  ctx: INuxtContextIsserTriplet,
): boolean => {
  const { isStatic = false, isDev = false } = ctx
  const isProcessStatic = process.static
  const out =
    isStatic === true && (isStatic === isProcessStatic) === (isDev === false)
  return out
}

export interface IPageRedirectAsyncData {
  isStaticBuildRuntime: boolean
  shouldRedirect: boolean
  shouldRedirectTo: false | IVueRouterLocation
  to: false | IVueRouterLocation
  baseUrl: string
}

export const createPageRedirectAsyncData = (
  redirects: [RegExp, string, true?][],
) => (ctx: Context): IPageRedirectAsyncData => {
  const resolveMaybeToLocation = createMaybeRedirectTo(redirects)
  const isStaticBuildRuntime = createIsStaticBuildRuntime(ctx)
  const shouldRedirect = isStaticBuildRuntime === false
  const shouldRedirectTo = resolveMaybeToLocation(ctx.route)
  let to: false | IVueRouterLocation = false
  const baseUrl = PUBLIC_BASE_URL
  if (shouldRedirectTo) {
    if (shouldRedirect) {
      ctx.redirect(shouldRedirectTo)
    }
    if (isStaticBuildRuntime) {
      to = shouldRedirectTo
    }
  }
  const out: IPageRedirectAsyncData = {
    isStaticBuildRuntime,
    shouldRedirect,
    shouldRedirectTo,
    to,
    baseUrl,
  }
  return out
}
