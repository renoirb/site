<template>
  <img v-if="imgSrc !== ''" :src="imgSrc" :alt="alt" />
  <svg v-else width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="2"
      y="2"
      width="296"
      height="296"
      style="fill: #dedede; stroke: #555555; stroke-width: 2"
    />
    <text
      x="50%"
      y="50%"
      font-size="18"
      text-anchor="middle"
      alignment-baseline="middle"
      font-family="monospace, sans-serif"
      fill="#555555"
    >
      300&#215;300
    </text>
  </svg>
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
