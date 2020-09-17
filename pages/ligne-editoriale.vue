<template>
  <div class="pages__ligne-editoriale--parent">
    <div class="document document--item">
      <div class="title page-title">
        <h1>{{ document.title }}</h1>
      </div>
      <div class="body">
        <nuxt-content :document="document" />
      </div>
    </div>
    <h3 class="mb-4 text-xl">{{ document.title }}</h3>
  </div>
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
    async asyncData({ $content, error }) {
      const pageKey = 'editorial-guideline'
      const locale = 'en-CA'
      const query = $content('pages')
      const documents = (await query
        .where({ pageKey: { $contains: pageKey }, locale: { $eq: locale } })
        .fetch()) as INuxtContentResult[]

      if (documents.length !== 1) {
        error({ message: 'Document not found' })
      }
      const document = documents[0]
      return {
        document,
      }
    },
  })
</script>
