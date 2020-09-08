<template>
  <div class="pages__ligne-editoriale--parent">
    <h3 class="mb-4 text-xl">{{ document.title }}</h3>
    <nuxt-content :document="document" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    document: INuxtContentResult
  }
  export interface Props {}
  export default defineComponent<Props, Data>({
    async asyncData({ $content, error }) {
      const pageKey = 'editorial-guideline'
      const locale = 'fr-CA'
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
