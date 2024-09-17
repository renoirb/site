import { NuxtConfig } from '@nuxt/types'
import {
  nuxtContentHooks,
  PRODUCTION_BASE_PATH,
  fromProcessEnvToAppIdentity,
  IS_CI,
} from './lib'
import tailwindConfig from './tailwind.config'

const appIdentity = fromProcessEnvToAppIdentity(process.env)

const isProduction = process.env.NODE_ENV === 'production'

// #TODO
// - site-map.xml
// - list of all URLs to articles markdown files published with title, created, locale

const main: NuxtConfig = {
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
    titleTemplate: '%s - ' + appIdentity.name,
    title: appIdentity.name,
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
  env: {
    ...appIdentity,
  },
  hooks: {
    ...nuxtContentHooks,
  },
  /*
   ** Global CSS
   */
  css: ['~assets/styles/main.css'],
  loading: { color: '#CB7723' /* charlie */ },
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/prism'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  router: {
    middleware: ['init', 'redirects'],
    base: IS_CI ? PRODUCTION_BASE_PATH : '/',
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/composition-api',
    'nuxt-purgecss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-purgecss',
    'nuxt-webfontloader',
  ],
  /*
   ** Content module configuration
   ** See:
   ** - https://content.nuxtjs.org/configuration
   ** - https://content.nuxtjs.org/configuration#defaults
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
  // https://tailwindcss.nuxtjs.org/setup/
  tailwindcss: {
    cssPath: '~/assets/styles/main.css',
    configPath: '~/tailwind.config.js',
    // add '~tailwind.config` alias
    exposeConfig: true,
    config: tailwindConfig,
  },
  // https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },
  webfontloader: {
    google: {
      families: ['Roboto:100,400,500,700', 'Roboto Mono'],
    },
  },
  purgeCSS: {
    mode: 'postcss',
    enabled: isProduction,
    whitelist: ['dark-mode', 'light-mode', /token$/, 'taxonomy', 'document'],
  },
  server: {
    host: '0.0.0.0',
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: true,
    // No need for different file names,
    // we are OK with same file names.
    // No need to cache for eternity, under heavy traffic, it's OK
    // Same file served from browser cache not too long.
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js',
      css: () => '[name].css',
      img: () => '[path][name].[ext]',
      font: () => '[path][name].[ext]',
      video: () => '[path][name].[ext]',
    },
  },
  generate: {
    dir: 'dist',
  },
  typescript: {},
}

export default main
