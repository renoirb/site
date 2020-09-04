<template>
  <div class="pages-blog-year-month--index">
    <nuxt-link to="/blog">Blog</nuxt-link>
    <h2>{{ year }}/{{ month }}</h2>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <nuxt-link :to="article.path">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    documents: INuxtContentResult[]
    year: string
    month: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    watchQuery: true,
    async asyncData({ $content, params }) {
      const { year, month } = params

      const documents = (await $content('blog', year, month, { deep: true })
        .sortBy('date', 'desc')
        .fetch()) as INuxtContentResult[]

      return {
        documents,
        year,
        month,
      }
    },
  })
</script>
