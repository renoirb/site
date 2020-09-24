import Vue from 'vue'
import Prism from 'prismjs'
import { Plugin } from '@nuxt/types'

import 'prism-themes/themes/prism-material-oceanic.css'

export { Prism }

export type IPrismHighlight = (code: string, language: string) => string

declare module 'vue/types/vue' {
  interface Vue {
    $prism: IPrismHighlight
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$prism inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $prism: IPrismHighlight
  }
  // nuxtContext.$prism
  interface Context {
    $prism: IPrismHighlight
  }
}

// https://typescript.nuxtjs.org/cookbook/plugins.html#iii-combined-inject
// declare module 'vuex/types/index' {
//   // this.$prism inside Vuex stores
//   interface Store<S> {
//     $prism: IPrismHighlight
//   }
// }

/**
 * This almost work, or unreliably for using as generate
 * time highlighted code
 * So this will be done different. later.
 */
export const highlight: IPrismHighlight = (code, language = 'javascript') => {
  let out = ''
  try {
    const highlighted = Prism.highlight(
      code,
      Prism.languages[language],
      language,
    )
    out = highlighted
  } catch (err) {
    console.warn(`~/plugins/prism at highlight error for ${language}`, err) // eslint-disable-line
    // Nothing
  }

  return out
}

const prismNuxtPlugin: Plugin = (_, inject) => {
  Vue.filter('highlight', highlight)
  // eslint-disable-next-line
  console.log('what-gets-executed-1: plugins/prism')
  inject('prism', highlight)
}

export default prismNuxtPlugin
