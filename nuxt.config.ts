import { resolve } from 'path'
import NuxtConfiguration from '@nuxt/config'

import { LogLevel, ensureValidLogLevel } from './lib/runtime'
import { workbox } from './lib/runtime/nuxt/config'

// @ts-ignore
import { name, description, browserslist } from './package.json'

const {
  NODE_ENV = 'production',
  NUXT_ENV_LOG_LEVEL = 'debug',
  NUXT_ENV_ENABLE_WORKBOX = 'nope',
} = process.env

// https://nuxtjs.org/api/configuration-env/
const enableWorkbox: boolean = NUXT_ENV_ENABLE_WORKBOX === 'true'
const isDev: boolean = NODE_ENV !== 'production'
const logLevel: LogLevel = ensureValidLogLevel(NUXT_ENV_LOG_LEVEL)

/**
 * Docs:
 *   @nuxtjs/axios: https://axios.nuxtjs.org/usage
 */
const modules: string[] = ['@nuxtjs/component-cache', '@nuxtjs/axios']
if (enableWorkbox) {
  modules.push('@nuxtjs/pwa')
}

if (NUXT_ENV_LOG_LEVEL === 'debug') {
  // We want to set the process environment
  process.env.DEBUG = '*,-babel,-snapdragon:*,-vue-eslint-parser,-eslint:*'
}

const runtimeSwitches: { [key: string]: string | boolean } = {
  DEBUG: String(process.env.DEBUG), // And visualize what's been setup
  enableWorkbox,
  isDev,
  logLevel,
  modules: (modules || []).join(', '),
}

console.table({ ...runtimeSwitches }) // tslint:disable-line

const main: NuxtConfiguration = {
  mode: 'spa',
  dev: isDev,
  modern: true,

  head: {
    title: `${name} | %s`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
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

  loading: { color: '#fff' },

  css: ['normalize.css/normalize.css', '@/assets/styles/index.scss'],

  plugins: [],

  manifest: {
    description,
    name,
    short_name: 'renoirb.com',
    theme_color: '#188269',
  },

  modules: [
    '~/modules/webpack-loaders',
    ...modules,
    // https://github.com/gbouteiller/nuxt-element-ui
    [
      'nuxt-element-ui',
      {
        components: ['Button', 'DatePicker'],
        locale: 'fr',
      },
    ],
    // TODO: See https://github.com/chymz/nuxt-starter/blob/7ecd808885e14ca6a03c3462bad9a7d814ec150f/internals/nuxt.js#L44
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // See "Apply defaults" in node_modules/@nuxtjs/axios/lib/module.js
    debug: isDev,
  },

  workbox: workbox(enableWorkbox, isDev),

  build: {
    transpile: [/^element-ui/],
    extractCSS: true,

    postcss: {
      /**
       * Adjust compiled CSS to support older User-Agents.
       * https://nuxtjs.org/api/configuration-build/#postcss
       * https://github.com/csstools/postcss-preset-env#features
       * https://github.com/csstools/postcss-preset-env#browsers
       */
      preset: {
        browserslist,
      },
      plugins: {
        'postcss-cssnext': {
          browsers: ['> 1%', 'not op_mini all'],
          warnForDuplicates: false,
        },
        cssnano: {
          zindex: false,
        },
      },
    },

    /**
     * How to handle JavaScript support for server and client bundles[1].
     *
     * server bundle is what runs Server-side.
     * client bundle is what runs on the browser.
     *
     * Nuxt's babel presets defaults to vue-app, and for client bundle,
     * it supports until IE 9[2].
     *
     * What's used under the hood is babel-preset-vue-app [3][4].
     * One could change this by adding a section below similar to [5].
     *
     * [1]: https://new.babeljs.io/docs/en/next/babel-preset-env.html#target-specific-browsers-via-browserslist
     * [2]: https://github.com/nuxt/nuxt.js/issues/3430#issuecomment-417433970
     * [3]: https://github.com/vuejs/babel-preset-vue-app#targets
     * [4]: https://nuxtjs.org/api/configuration-build/#babel
     * [5]: https://github.com/nuxt/nuxt.js/issues/271#issuecomment-370800435
     *
     * Refer to https://nuxtjs.org/api/configuration-build#loaders
     * Keys available under loaders:
     * - file
     * - fontUrl
     * - imgUrl
     * - vue
     * - ...
     */
    loaders: {
      imgUrl: {
        /**
         * What goes in url-loader options.
         * #ChangingImgUrl
         * https://github.com/webpack-contrib/url-loader#options
         */
        limit: 101000,
      },
    },

    extend(webpackConfig) {
      /**
       * There are two builds, one for "client", one "server".
       * This part is executed for both cases.
       *
       * See ./node_modules/nuxt/lib/builder/webpack/base.js
       *
       * ```
       * loaders[imgUrl] { limit: 101001, name: '[path][name].[ext]' }
       * loaders[vueStyle] { sourceMap: true }
       * ```
       */
      // Object.keys(loaders).forEach(lk => console.log(`loaders[${lk}]`, loaders[lk]))

      /**
       * If one needs to change more than just options in Webpack loader.
       *
       * Following will adjust the same as what we see in imgUrl above. rel=#ChangingImgUrl
       *
       * https://github.com/nuxt/nuxt.js/issues/148#issuecomment-402955923
       * https://vue-svg-loader.js.org/#nuxt.js
       * https://github.com/nuxt/nuxt.js/blob/2.x/examples/custom-build/nuxt.config.js#L13
       */
      if (webpackConfig.module) {
        // @ts-ignore
        webpackConfig.module.rules.some(loader => {
          if (loader.use) {
            const urlLoaderCheck = use => use.loader === 'url-loader'
            // @ts-ignore
            const urlLoader = loader.use.find(urlLoaderCheck)
            if (urlLoader) {
              // Uncomment to see in build output (visualizeConfig) the effect.
              // urlLoader.options.limit = 101001
              return true
            }
          }
        })
      } else {
        throw new Error(`Something is missing`)
      }

      if (webpackConfig.resolve && webpackConfig.resolve.alias) {
        // This line allows us to use `@import "~assets/..."` in components <style> tags:
        webpackConfig.resolve.alias['~assets'] = resolve(__dirname, 'assets')
      } else {
        throw new Error(`Something is missing`)
      }
    },
  },

  render: {
    http2: {
      push: true,
    },
    static: {
      maxAge: '1d',
      setHeaders(res, path) {
        if (enableWorkbox) {
          if (path.includes('sw.js')) {
            res.setHeader('Cache-Control', `public, max-age=${15 * 60}`)
          }
        }
      },
    },
  },
}

export default main