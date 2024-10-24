<template>
  <div class="les-arnaques-sur-internet-index">
    <div class="document document--item z-30">
      <header
        class="title page-title only-this-page-title mb-4 font-serif text-2xl italic"
      >
        <h1>{{ pageTitle }}</h1>
      </header>
      <div class="body mt-10">
        <nuxt-content :document="document" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  /** eslint-disable @typescript-eslint/no-unused-vars no-unused-vars */
  import Vue from 'vue'
  import type {
    INuxtContentResult,
    /*                       */
  } from '~/lib'
  export interface Data {
    document: INuxtContentResult
    pageLocale: string
    pageTitle: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content }) {
      const pageKey = 'les-arnaques-sur-internet-index'
      const pageLocale = 'fr-CA'
      const pageTitle = `Les pièges tendus sur l’Internet, comment les détecter.`

      const query = $content('projets', { deep: true }).where({
        pageKey: { $eq: pageKey },
      })

      const [document] = (await query.fetch()) as INuxtContentResult[]

      return {
        document,
        pageLocale,
        pageTitle,
      }
    },
  })
</script>

<style>
  /**
   * Dirtily hide the generated title.
   *
   * What makes this dirty is that it's not a scoped CSS.
   *
   * There would be two times the title, one not written right.
   * Hiding it for now.
   * This is a dirty way but let's fix this once everything else is migrated.
   */
  .view__projets-les-arnaques-sur-internet
    .title.page-title.mb-4.font-serif.text-2xl.italic {
    display: none !important;
  }
  .view__projets-les-arnaques-sur-internet
    .title.page-title.mb-4.font-serif.text-2xl.italic.only-this-page-title {
    display: block !important;
  }
</style>
