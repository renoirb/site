<template>
  <figure
    :class="{
      'app-image': true,
      'lost-image': lostImage,
      'app-image-error': errored,
      'is-loading': !loaded,
      'has-image': !lostImage && !errored,
    }"
  >
    <img
      v-if="!!imageSource"
      ref="img"
      :src="imageSource"
      class="object-cover w-full rounded"
      :data-remote="imageSiteDistSrc"
      @load.once="onLoad"
    />
    <!-- eslint-disable vue/no-v-html -->
    <figcaption
      v-if="imageFigcaption !== ''"
      class="relative z-30 p-4 mt-2 text-sm rounded-md shadow-md"
    >
      <span
        class="figcaption-contents"
        v-html="abbreviatize(imageFigcaption)"
      />
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    abbreviatize,
    FALLBACK_BLANK_IMAGE,
    IAbbreviatize,
    PUBLIC_SITE_ASSETS_ORIGIN,
  } from '~/lib'
  // const images = require.context('~assets/', false, /\.(?:png|jpg|svg|gif)$/i)
  const RE_WEBPACK_ASSETS = /^[@~]\/assets\//
  const PUBLIC_SITE_ASSETS_ORIGIN_ASSETS =
    PUBLIC_SITE_ASSETS_ORIGIN + '/assets/'
  export interface Data {
    errored: boolean
    loaded: boolean
    fallbackSrc: string
    lostImage: boolean
    /**
     * Flip this to true if we replaced local images
     * to use GitHub renoirb/site-assets asset URL.
     */
    hasSrcBeenRewritten: boolean
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
    onLoad(evt: HTMLElementEventMap['load']): void
  }
  export interface Computed {
    imageSource: any
    imageFigcaption: string
    imageSiteDistSrc: string
  }
  export interface Props {
    src: string
    alt: string | ''
    figcaption: string | ''
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppImage' /* app-image */,
    props: {
      src: {
        type: String,
        default: '',
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
      const lostImage = this.src === 'lost-image'
      return {
        errored: false,
        loaded: false,
        lostImage,
        hasSrcBeenRewritten: false,
        fallbackSrc: FALLBACK_BLANK_IMAGE,
      }
    },
    computed: {
      imageSiteDistSrc(): string {
        const src = String(this.src)
        let out = src.replace(RE_WEBPACK_ASSETS, '') as string
        out = PUBLIC_SITE_ASSETS_ORIGIN_ASSETS + out
        return out
      },
      imageFigcaption(): string {
        let figcaption = this.figcaption
        if (this.lostImage) {
          figcaption = 'Missing image'
        }
        return figcaption
      },
      imageSource() {
        // @ts-ignore
        let src = this.src as string
        if (src === 'lost-image') {
          src = ''
        }
        /**
         * Using a method because of its asynchronous nature
         * Bookmarks:
         * - https://github.com/nuxt/content/issues/106#issuecomment-663873586
         * - https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234
         * - https://github.com/webpack/webpack/issues/4807
         * - https://webpack.js.org/api/module-methods/#magic-comments
         */
        if (!RE_WEBPACK_ASSETS.test(src) && src !== '') {
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
          return this.fallbackSrc
        }
      },
    },
    methods: {
      abbreviatize,
      onLoad(evt: HTMLElementEventMap['load']): void {
        let currentTarget: HTMLImageElement
        // @ts-ignore
        const { currentSrc = '' } = evt.srcElement
        if (currentSrc.startsWith('data')) {
          this.errored = true
          this.loaded = true
        } else {
          this.loaded = true
        }
        /**
         * Load from remote fallback.
         *
         * Bookmarks:
         * - https://github.com/PivaleCo/nuxt-image-loader-module/blob/master/src/plugin.template.js
         * - https://github.com/vuejs/vue-cli/issues/2099
         */
        if (evt.currentTarget) {
          currentTarget = evt.currentTarget as HTMLImageElement
          if (this.errored && currentTarget) {
            currentTarget.setAttribute('data-remote-replaced-src', this.src)
            currentTarget.setAttribute('src', this.imageSiteDistSrc)
            currentTarget.classList.add('is-data-remote-replaced')
            this.hasSrcBeenRewritten = true
          }
        }
      },
    },
  })
</script>

<style scoped>
  .lost-image {
    @apply mx-auto w-1/6 my-5;
  }
  figcaption {
    /* the speech bubble */
    position: relative;
    background: var(--color-container);
  }
  figcaption::after {
    /* the speech bubble arrow */
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    margin-left: -20px;
    /* drawing of the speech bubble arrow */
    border: 20px solid transparent;
    border-bottom-color: var(--color-container);
    border-top: 0;
  }
</style>
