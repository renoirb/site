<template>
  <div class="pages-blog--index">
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
    q: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    watchQuery: true,
    async asyncData({ $content, route }) {
      const q = route.query.q || ''
      let query = $content('blog', { deep: true }).sortBy('date', 'desc')
      if (q) {
        query = query.search(q)
      }
      const documents = (await query.fetch()) as INuxtContentResult[]
      return {
        q,
        documents,
      }
    },
    watch: {
      q() {
        this.$router
          .replace({ query: this.q ? { q: this.q } : undefined })
          .catch(() => {})
      },
    },
  })
</script>
