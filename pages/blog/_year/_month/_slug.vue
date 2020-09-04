<template>
  <div class="pages-blog-year-month--slug">
    <very-old-article
      :locale="document.locale || 'en-CA'"
      :date="document.date"
    />
    <ul>
      <li v-for="tag in tags" :key="tag">
        <nuxt-link :to="`/blog/tag/${tag}`">
          {{ tag }}
        </nuxt-link>
      </li>
    </ul>
    <div>
      <h2>{{ document.title }}</h2>
      <nuxt-content :document="document" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    document: INuxtContentResult
    year: string
    month: string
    slug: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params, error }) {
      const { year, month, slug } = params
      const tagsSet = new Set<string>()

      let document

      try {
        document = (await $content(
          'blog',
          year,
          month,
          slug,
        ).fetch()) as INuxtContentResult
      } catch (e) {
        error({ message: 'Document not found' })
      }
      if (document) {
        // ... yeah, TypeScript assertion functions. not now!
        // @ts-ignore
        const { tags = [] } = document as INuxtContentResult
        if (tags && Array.isArray(tags)) {
          // @ts-ignore
          tagsSet.add(...tags)
        }
      }

      return {
        year,
        month,
        slug,
        document,
        tags: tagsSet,
      }
    },
  })
</script>
