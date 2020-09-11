<template>
  <div class="pages__blog__year--index">
    <div class="document document--collection">
      <div class="title page-title">
        <h1>
          Published in <em>{{ year }}</em>
        </h1>
      </div>
      <div class="body">
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
    </div>
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
