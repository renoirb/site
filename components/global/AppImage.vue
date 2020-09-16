<template>
  <img v-if="!hasErrored" :src="srcAttr()" :alt="altAttr" class="app-image" />
  <img
    v-else
    :src="fallbackSrc"
    :alt="altAttr"
    class="app-image app-image-error"
  />
</template>

<script lang="ts">
  import Vue from 'vue'
  const RE_WEBPACK_ASSETS = /^@\/assets\/images\//i
  export interface Data {
    altAttr: string
    fallbackSrc: string
    errored: boolean
  }
  export interface Methods {
    srcAttr(): Promise<string>
  }
  export interface Computed {
    hasErrored: boolean
  }
  export interface Props {
    src: string
    alt: string
  }
  const fallbackSrc = `
    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMA
    AAAl21bKAAAAA1BMVEUhR2EbeJkBAAAAAXRSTlPM0jRW/QAAAApJREFUeJ
    xjYgAAAAYAAzY3fKgAAAAASUVORK5CYII=
  `.replace(/[\n\s]/g, '')
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
    },
    data() {
      return {
        fallbackSrc,
        errored: false,
        altAttr: '',
      }
    },
    computed: {
      hasErrored(): boolean {
        return this.src === '' || this.errored === true
      },
    },
    methods: {
      async srcAttr(): Promise<string> {
        this.altAttr = this.alt
        /**
         * Using a method because of its asynchronous nature
         * Bookmarks:
         * - https://github.com/nuxt/content/issues/106#issuecomment-663873586
         * - https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234
         * - https://github.com/webpack/webpack/issues/4807
         * - https://webpack.js.org/api/module-methods/#magic-comments
         */
        try {
          // WebPack, plz
          const src = this.src
          if (RE_WEBPACK_ASSETS.test(src)) {
            // src = src.replace(RE_WEBPACK_ASSETS, '')
          } else {
            const message = `
              Path "${src}" does not start by "@/assets/images/",
              For WebPack/Nuxt/Vue loading purposes,
              load images only to files stored into assets/images folder
            `.replace(/[\n\s]/g, '')
            throw new Error(message)
          }
          // console.log('@/assets/images', src) // eslint-disable-line
          const resource: string = await import(src)
          return resource
        } catch (error) {
          this.errored = true
          // console.error('app-image error', error) // eslint-disable-line
          this.altAttr = String(error)
          return this.fallbackSrc
        }
      },
    },
  })
</script>

<style scoped>
  .app-image {
    min-height: 100px;
    min-width: 100px;
  }
</style>
