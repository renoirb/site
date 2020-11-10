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
      ref="img"
      anonymous
      loading="lazy"
      :src="imageSource"
      :alt="typeof alt === 'string' ? alt : ''"
      class="object-cover w-full rounded"
      :data-remote="imageSiteDistSrc"
      @load="onLoad($event)"
      @click="imageSiteDistPoke($event)"
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
    timeout: NodeJS.Timeout | null
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
    onLoad(evt: HTMLElementEventMap['load']): void
    imageSiteDistPoke(
      evt?: HTMLElementEventMap['load'] | HTMLElementEventMap['click'],
    ): void
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
        timeout: null,
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
        if (this.$isServer) {
          return this.imageSiteDistSrc
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
    mounted() {
      this.timeout = setTimeout(() => {
        this.imageSiteDistPoke()
      }, 2000)
    },
    methods: {
      abbreviatize,
      imageSiteDistPoke(
        // @ts-ignore
        // eslint-disable-next-line
        evt?: HTMLElementEventMap['load'] | HTMLElementEventMap['click'],
      ): void {
        if (this.hasSrcBeenRewritten) {
          return
        }

        if (this.src.startsWith('data')) {
          this.errored = true
        }

        if (this.$refs && this.$refs.img && 'setAttribute' in this.$refs.img) {
          /**
           * Load from remote fallback.
           *
           * Bookmarks:
           * - https://github.com/PivaleCo/nuxt-image-loader-module/blob/master/src/plugin.template.js
           * - https://github.com/vuejs/vue-cli/issues/2099
           */
          try {
            if (
              (this.src.startsWith('data') || this.src.startsWith('~')) &&
              !this.hasSrcBeenRewritten
            ) {
              this.$refs.img.setAttribute('data-remote-replaced-src', this.src)
              this.$refs.img.setAttribute('src', this.imageSiteDistSrc)
              this.$refs.img.classList.add('is-data-remote-replaced')
              this.hasSrcBeenRewritten = true
              this.loaded = true
            }
          } catch (e) {
            // Fail safely
          }
        }
      },
      onLoad(evt: HTMLElementEventMap['load']): void {
        this.imageSiteDistPoke(evt)
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
