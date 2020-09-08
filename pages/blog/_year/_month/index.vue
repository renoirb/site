<template>
  <div class="pages__blog__year__month--index">
    <h2>{{ year }}/{{ month }}</h2>
    <ul>
      <li
        v-for="document in documents"
        :key="document.slug"
        :lang="document.locale ? document.locale : 'en-CA'"
      >
        <nuxt-link :to="document.path">
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
    documents: INuxtContentResult[]
    year: string
    month: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
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
