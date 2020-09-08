<template>
  <div class="pages__blog__year--index">
    <h2>
      Published in <em>{{ year }}</em>
    </h2>
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
    documents: INuxtContentResult
    year: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params }) {
      const { year } = params

      const documents = (await $content('blog', year, { deep: true })
        .sortBy('date', 'desc')
        .fetch()) as INuxtContentResult[]

      return {
        documents,
        year,
      }
    },
  })
</script>
