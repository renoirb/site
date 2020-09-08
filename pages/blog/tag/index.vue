<template>
  <div class="pages__blog__tag--index">
    <ul>
      <li v-for="tag in tags" :key="tag">
        <nuxt-link :to="`/blog/tag/${tag}`">
          {{ tag }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    tags: string[]
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  const tags = new Set<string>()
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content }) {
      const documents = (await $content('blog', { deep: true })
        .sortBy('date', 'desc')
        .fetch()) as INuxtContentResult[]

      for (const document of documents) {
        if ('tags' in document) {
          // @ts-ignore
          tags.add(...(document.tags || []))
        }
      }
      for (const [tag] of tags.entries()) {
        if (typeof tag !== 'string' || tag.replace(/[\s\t/]/g, '') === '') {
          tags.delete(tag)
        }
      }
      return {
        tags,
      }
    },
  })
</script>
