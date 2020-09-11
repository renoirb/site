<template>
  <div class="pages__blog__tag--item">
    <div class="document document--collection">
      <div class="title page-title">
        <h1>
          Under tag <em>{{ tag }}</em>
        </h1>
      </div>
      <div class="body">
        <ul>
          <li
            v-for="document in documents"
            :key="document.slug"
            :lang="document.locale ? document.locale : 'en-CA'"
          >
            <nuxt-link :to="formatTo(document)">
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
