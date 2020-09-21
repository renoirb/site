<template>
  <div class="pages__ligne-editoriale--parent">
    <div class="document document--item">
      <div class="title page-title">
        <h1>{{ content.title }}</h1>
      </div>
      <div class="body">
        <nuxt-content :document="content" />
      </div>
    </div>
  </div>
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
    async asyncData({ $content, error }) {
      const pageKey = 'editorial-guideline'
      const locale = 'fr-CA'
      const ds = $content('pages')
      const contents = (await ds
        .where({ pageKey: { $contains: pageKey }, locale: { $eq: locale } })
        .fetch()) as INuxtContentResult[]

      if (contents.length !== 1) {
        error({ message: 'Document not found' })
      }
      const content = contents[0]
      return {
        content,
      }
    },
  })
</script>
