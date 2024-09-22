<template>
  <div class="pages__projets__lesarnaques--index">
    Hi!
    <nuxt-content :document="document" />
  </div>
</template>

<script lang="ts">
  /** eslint-disable @typescript-eslint/no-unused-vars no-unused-vars */
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    document: INuxtContentResult
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, error }) {
      let document
      try {
        document = await $content('projets')
          .where({ pageKey: { $eq: 'les-arnaques-sur-internet-index' } })
          .fetch()
      } catch (e) {
        error({ message: 'Page not found' })
      }

      return {
        document,
      }
    },
  })
</script>
