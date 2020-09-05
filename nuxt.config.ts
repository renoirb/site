import NuxtTailwindModule from '@nuxtjs/tailwindcss'
import { PRODUCTION_BASE_PATH } from './lib/consts'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        property: 'og:image',
        content:
          'https://secure.gravatar.com/avatar/cbf8c9036c204fe85e15155f9d70faec?s=400',
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        property: 'twitter:site',
        content: '@renoirb',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  router: {
    middleware: ['redirects'],
    base: isProduction ? PRODUCTION_BASE_PATH : '/',
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api',
    NuxtTailwindModule,
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    // Doc: https://content.nuxtjs.org/integrations#nuxtjsfeed
    // '@nuxtjs/feed',
    // '@nuxtjs/pwa',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See:
   ** - https://content.nuxtjs.org/configuration
   ** - https://content.nuxtjs.org/configuration#defaults
   */
  content: {},
  /*
   ** TailWind CSS
   ** https://tailwindcss.nuxtjs.org/setup/
   */
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
    configPath: 'tailwind.config.ts',
    exposeConfig: true,
    config: {
      purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: isProduction,
        content: [
          'components/**/*.vue',
          'layouts/**/*.vue',
          'pages/**/*.vue',
          'plugins/**/*.ts',
          'nuxt.config.ts',
        ],
      },
    },
  },
  /*
   ** Storybook Nuxt
   ** https://storybook.nuxtjs.org/setup
   */
  storybook: {
    // https://storybook.nuxtjs.org/options#addons
    addons: [
      '@storybook/addon-knobs/register',
      '@storybook/addon-viewport/register',
      '@storybook/addon-storysource/register',
      '@storybook/addon-notes/register',
    ],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true,
  },
  generate: {
    dir: 'dist',
  },
  typescript: {},
}
