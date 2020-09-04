<template>
  <div class="pages-blog-tag--index">
    <nuxt-link to="/blog">Blog</nuxt-link>
    <nuxt-link to="/blog/tag">tag</nuxt-link>
    <h2>{{ tag }}</h2>
    <ul>
      <li v-for="document in documents" :key="document.slug">
        <nuxt-link :to="formatTo(document)">
          {{ document.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    documents: INuxtContentResult
    tag: string
  }
  export interface Methods {
    formatTo(document: INuxtContentResult): string
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params }) {
      const { tag } = params

      const documents = (await $content('blog', { deep: true })
        .where({ tags: { $contains: tag } })
        .sortBy('date', 'desc')
        .fetch()) as INuxtContentResult[]

      return {
        documents,
        tag,
      }
    },
    methods: {
      formatTo(document: INuxtContentResult): string {
        const [year, month] = String(document.date).split('-')
        const { slug } = document
        return `/blog/${year}/${month}/${slug}`
      },
    },
  })
</script>
