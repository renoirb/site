<template>
  <section class="pages__about--parent">
    <nuxt-content :document="content" />
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    content: INuxtContentResult
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    layout: 'blank',
    async asyncData({ $content }) {
      const content = await $content('about').fetch()
      return {
        content,
      }
    },
  })
</script>
