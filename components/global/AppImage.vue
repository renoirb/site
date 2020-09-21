<template>
  <figure :class="{ 'app-image-error': errored, 'is-loading': !loaded }">
    <img
      v-if="!!imageSource"
      ref="img"
      :src="imageSource"
      class="object-cover w-full"
      @load="onLoad"
    />
    <!-- eslint-disable vue/no-v-html -->
    <figcaption
      v-if="figcaption !== ''"
      class="text-xs"
      v-html="abbreviatize(figcaption)"
    />
  </figure>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { abbreviatize, IAbbreviatize, trimText } from '~/lib'
  // const images = require.context('~assets/', false, /\.(?:png|jpg|svg|gif)$/i)
  const RE_WEBPACK_ASSETS = /^[@~]\/assets\//
  export interface Data {
    errored: boolean
    loaded: boolean
    fallbackSrc: string
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
    onLoad(evt: HTMLElementEventMap['load']): void
  }
  export interface Computed {
    imageSource: any
  }
  export interface Props {
    src: string
    alt: string | ''
    figcaption: string | ''
  }
  const fallbackSrc = trimText`
    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMA
    AAAl21bKAAAAA1BMVEUhR2EbeJkBAAAAAXRSTlPM0jRW/QAAAApJREFUeJ
    xjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=
  `
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppImage' /* app-image */,
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: false,
        default: '',
      },
      figcaption: {
        type: String,
        required: false,
        default: '',
      },
    },
    data() {
      return {
        errored: false,
        loaded: false,
        fallbackSrc,
      }
    },
    computed: {
      imageSource() {
        // @ts-ignore
        const src = this.src as string
        /**
         * Using a method because of its asynchronous nature
         * Bookmarks:
         * - https://github.com/nuxt/content/issues/106#issuecomment-663873586
         * - https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234
         * - https://github.com/webpack/webpack/issues/4807
         * - https://webpack.js.org/api/module-methods/#magic-comments
         */
        if (!RE_WEBPACK_ASSETS.test(src)) {
          const message = `
            Path "${src}" does not start by "@/assets/",
            For WebPack/Nuxt/Vue loading purposes,
            load images only to files stored into assets folder
          `.replace(/[\n\s]/g, ' ')
          throw new Error(message)
        }
        // @ts-ignore
        const rewrittenSrc = this.src.replace(RE_WEBPACK_ASSETS, '') as string
        try {
          return require(`@/assets/${rewrittenSrc}`)
        } catch (err) {
          return fallbackSrc
        }
      },
    },
    methods: {
      abbreviatize,
      onLoad(evt: HTMLElementEventMap['load']): void {
        // @ts-ignore
        const { currentSrc = '' } = evt.srcElement
        if (currentSrc.startsWith('data')) {
          this.errored = true
          this.loaded = true
        } else {
          this.loaded = true
        }
        console.warn('app-image onLoad', currentSrc, evt) // eslint-disable-line
      },
    },
  })
</script>
