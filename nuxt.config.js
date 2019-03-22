import { resolve } from 'path'

import VueI18nExtensions from 'vue-i18n-extensions'
import { name, description, browserslist } from './package.json'

const dev = process.env.NODE_ENV !== 'production'

export default {
  mode: 'universal',

  dev,

  head: {
    title: name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: { color: '#fff' },

  css: [
    'normalize.css/normalize.css',
    {
      src: '@/assets/styles/index.scss',
      lang: 'scss',
    },
  ],

  plugins: [],

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // https://github.com/nuxt-community/blog-module
    // '@nuxtjs/blog',
    // https://github.com/gbouteiller/nuxt-element-ui
    [
      'nuxt-element-ui',
      {
        components: ['Button', 'DatePicker'],
        locale: 'fr',
      },
    ],
  ],

  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // See "Apply defaults" in node_modules/@nuxtjs/axios/lib/module.js
    debug: dev,
  },

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
    },
    babel: {
      presets({ isServer }) {
        const targets = isServer ? { node: '10' } : { ie: '11' }
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            { targets, corejs: 'core-js@3' },
          ],
        ]
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

    extend(config, ctx) {
      /**
       * Extend build.
       *
       * There are two builds, one for "client", one "server".
       * This part is executed for both cases.
       *
       * See ./node_modules/nuxt/lib/builder/webpack/base.js
       *
       * loaders from context above has, among others, the following keys;
       *
       *  * imgUrl
       *  * file
       *  * fontUrl
       *  * pugPlain
       *  * vue
       *  * css
       *  * cssModules
       *  * scss
       *  * vueStyle
       *  * ...
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
      config.module.rules.some(loader => {
        if (loader.use) {
          const urlLoaderCheck = use => use.loader === 'url-loader'
          const urlLoader = loader.use.find(urlLoaderCheck)
          if (urlLoader) {
            // Uncomment to see in build output (visualizeConfig) the effect.
            // urlLoader.options.limit = 101001
            return true
          }
        }
      })

      // This line allows us to use `@import "~assets/..."` in components <style> tags:
      config.resolve.alias['~assets'] = resolve(__dirname, 'assets')

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },

  render: {
    // see Nuxt.js docs: https://nuxtjs.org/api/configuration-render#bundleRenderer
    bundleRenderer: {
      directives: {
        t: VueI18nExtensions.directive,
      },
    },
  },
}
