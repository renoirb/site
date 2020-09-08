<template>
  <img v-if="imgSrc !== ''" :src="imgSrc" :alt="alt" />
  <img v-else :src="fallbackSrc" alt="" />
</template>

<script lang="ts">
  /**
   * Thank you: https://github.com/nuxt/content/issues/106#issuecomment-663873586
   */
  import Vue from 'vue'
  export interface Data {
    fallbackSrc: string
  }
  export interface Methods {}
  export interface Computed {
    imgSrc: string
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
    name: 'AppImage',
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
      }
    },
    computed: {
      imgSrc(): string {
        try {
          return require(`~/content${this.src}`)
        } catch (error) {
          return this.fallbackSrc
        }
      },
    },
  })
</script>
