import fs from 'fs'
import path from 'path'
import { NuxtConfig } from '@nuxt/types'
import pkg from './package.json'
import {
  BASE_PATH,
  createNuxtFeedCreate,
  fromPackageToAppIdentity,
  IS_CI,
  nuxtContentHooks,
  getNuxtContentAllPages,
  getNuxtContentAllLinks,
} from './lib'
import tailwindConfig from './tailwind.config'

const appIdentity = {
  // #TODO Configure this somewhere else. Also, this is more of a "configuration" than an "identity"
  ...fromPackageToAppIdentity(pkg, 'America/Montreal'),
  description: 'Fascinated By The Open Web Platform',
}

const isProduction = process.env.NODE_ENV === 'production'

// #TODO
// - [ ] site-map.xml
// - [x] RSS Feed
// - [ ] list of all URLs to articles markdown files published with title, created, locale
// - [ ] During build, remove search index we do not use https://damieng.com/blog/2024/05/14/nuxt-content-db-and-size/

const main: NuxtConfig = {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  vue: {
    config: {
      ignoredElements: [/^rb-/],
    },
  },
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'alternate',
        type: 'application/rss+xml',
        title: 'Renoir Boulanger’s Page Updates RSS Feed',
        href: 'https://renoirboulanger.com/feed.xml',
      },
      {
        rel: 'alternate',
        type: 'application/feed+json',
        title: 'Renoir Boulanger’s Page Updates Feed',
        href: 'https://renoirboulanger.com/feed.json',
      },
    ],
    script: [
      // <script src="https://myawesome-lib.js"></script>
      // { src: 'https://awesome-lib.js' },
      {
        type: 'module',
        vmid: 'load-esm-modules-separately-please',
        body: true,
        defer: true,
        innerHTML: `
/**
 * #WIP-Mingle-CustomElements-From-ESM-Modules: Added on 2024-09-18 during migration.
 */
import { registerCustomElement } from 'https://renoirb.com/esm-modules/element-utils.mjs'
import NoticeBoxElement from 'https://renoirb.com/esm-modules/notice-box-element.mjs'
try {
  registerCustomElement(window, 'rb-notice-box', NoticeBoxElement)
} catch (e) {
  // #XXX FIX ME because this gets loaded
  console.log('Already loaded', e)
}
        `,
      },
    ],
    __dangerouslyDisableSanitizers: [
      /* YOLO. Plus, I don’t want WebPack to inline and mangle what’s here. */ 'script',
    ],
  },
  env: {
    ...appIdentity,
  },
  hooks: {
    ...nuxtContentHooks,
    // reminder: don't have two hooks the same
    'generate:distCopied': (generator) => {
      const content = getNuxtContentAllPages()
      let fullyQualifiedFilePath = path.join(
        generator.options.generate.dir,
        'content.json',
      )
      fs.writeFileSync(fullyQualifiedFilePath, JSON.stringify(content))
      const allLinks = getNuxtContentAllLinks()
      fullyQualifiedFilePath = path.join(
        generator.options.generate.dir,
        'links.csv',
      )
      fs.writeFileSync(
        fullyQualifiedFilePath,
        Array.from(new Set(allLinks)).join('\n'),
      )
    },
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
    base: BASE_PATH,
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/error-404.vue'),
      })
    },
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
    '@nuxtjs/feed',
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

  feed: [
    {
      path: '/feed.xml',
      async create(feed, args) {
        const { $content } = require('@nuxt/content')
        const nuxtFeedCreate = createNuxtFeedCreate($content)
        await nuxtFeedCreate(feed, args)
      },
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: {
        BASE_PATH,
        appIdentity: {
          ...appIdentity,
          homepage:
            'https://renoirboulanger.com' /** #TODO Fix build for this */,
        },
        isProduction,
      },
    },
    {
      path: '/feed.json',
      async create(feed, args) {
        const { $content } = require('@nuxt/content')
        const nuxtFeedCreate = createNuxtFeedCreate($content)
        await nuxtFeedCreate(feed, args)
      },
      cacheTime: 1000 * 60 * 15,
      type: 'json1',
      data: {
        BASE_PATH,
        appIdentity: {
          ...appIdentity,
          homepage:
            'https://renoirboulanger.com' /** #TODO Fix build for this */,
        },
        isProduction,
      },
    },
  ],

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

// eslint-disable-next-line no-console
console.log('Nuxt Config', {
  isProduction,
  NODE_ENV: process.env.NODE_ENV,
  IS_CI,
  'router.base': main?.router?.base,
})

export default main
