/**
 * TypeScript Shims
 *
 * Thanks wemake-vue-template
 *
 * https://wemake-services.gitbook.io/wemake-vue-template/typescript#declaration-files
 * https://github.com/wemake-services/wemake-vue-template/blob/master/template/client/shims/vue-shims.d.ts
 */
declare module '*.vue' {
  import Vue from 'vue'
  /**
   * Place any unimported plugins here
   * @TODO See why we can't put in tsconfig.js in types
   */
  import '@nuxt/types'
  import '@nuxt/components'
  import '@nuxt/content'
  import '@nuxtjs/color-mode'
  import '@nuxtjs/composition-api'
  import '@nuxtjs/tailwindcss'
  export default Vue
}
