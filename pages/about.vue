<template>
  <section class="pages__about--parent">
    <nuxt-content :document="document" />
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    document: INuxtContentResult
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    layout: 'blank',
    async asyncData({ $content }) {
      const document = await $content('about').fetch()
      return {
        document,
      }
    },
  })
</script>
