<template>
  <div class="pages-blog-year--index">
    <nuxt-link to="/blog">Blog</nuxt-link>
    <h2>{{ $route.params.year }}</h2>
    <ul>
      <li v-for="document in documents" :key="document.slug">
        <nuxt-link :to="document.path">
          <em>{{ document.date }}</em>
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
    year: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params }) {
      const { year } = params

      const documents = await $content('blog', year, { deep: true })
        .sortBy('date', 'desc')
        .fetch()

      return {
        documents,
        year,
      }
    },
  })
</script>
