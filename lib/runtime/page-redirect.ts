import { Context } from '@nuxt/types'
import {
  ComputedRef,
  reactive,
  ref,
  unref,
} from '@nuxtjs/composition-api'
import { Route } from 'vue-router'

import {
  IVueRouterLocation,
  INuxtContextIsserTriplet,
} from './nuxt'
import { PUBLIC_BASE_URL } from '../consts'

export type PageRedirect = [RegExp, string, true?]

export type MaybeRedirectToTypeFn = (route: Route) => false | IVueRouterLocation

export interface IUsePageRedirectState {
  to: false | IVueRouterLocation
}

export interface IUsePageRedirect {
  isStaticBuildRuntime: ComputedRef<boolean>
  shouldRedirectTo: ComputedRef<false | IVueRouterLocation>
  middleware: (ctx: Context) => void
  resolveMaybeToLocation: MaybeRedirectToTypeFn
}

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
export const createIsStaticBuildRuntime = (ctx: INuxtContextIsserTriplet): boolean  => {
  const {
    isStatic = false,
    isDev = false,
  } = ctx
  const isProcessStatic = process.static
  const out = isStatic === true && (isStatic === isProcessStatic) === (isDev === false)
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
  console.log('HONK-3', out, `\n\n\n`)
  return out
}

export const usePageRedirect = (
  redirects: [RegExp, string, true?][],
): IUsePageRedirect => {
  const state = reactive({
    isDev: false,
    isProcessStatic: false,
    isStatic: false,
  })

  const to = ref<false | IVueRouterLocation>(false)

  const resolveMaybeToLocation = createMaybeRedirectTo(redirects)

  const middleware = (ctx: Context): void => {
    // const { meta, link } = useMeta()

    const isDev = ctx.isDev
    const isStatic = ctx.isStatic
    const fromRoute = ctx.route

    const isProcessStatic = process.static

    state.isDev = isDev
    state.isProcessStatic = isProcessStatic
    state.isStatic = isStatic

    const toValue = resolveMaybeToLocation(fromRoute)
    to.value = toValue

    /*
    const redirectTo = shouldRedirectTo.value
    if (redirectTo) {
      if (isStaticBuildRuntime.value) {
        const href = redirectTo.path
        const vueMetaHeadMetaItems: IVueMetaHeadMetaInfoArray = [
          { hid: 'http-equiv', name: 'http-equiv', content: `0; URL=${href}` },
        ]
        meta.value.push(...vueMetaHeadMetaItems)
        const vueMetaHeadLinkItems: IVueMetaHeadLinkArray = [
          { rel: 'canonical', href },
        ]
        link.value.push(...vueMetaHeadLinkItems)
      }
    }
    */

    console.log(
      'HONK-2: usePageRedirect middleware',
      {
        isDev: unref(isDev),
        isProcessStatic: unref(isProcessStatic),
        isStatic: unref(isStatic),
        fromRoute,
        shouldRedirectTo: unref(shouldRedirectTo),

      },
      `\n\n\n`,
    )
  }

  return {
    isStaticBuildRuntime,
    shouldRedirectTo,
    middleware,
    resolveMaybeToLocation,
  }
}
