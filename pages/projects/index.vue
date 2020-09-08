<template>
  <div class="pages__blog--index">
    <nuxt-link to="/">Home</nuxt-link>
    <input id="search" v-model="q" placeholder="Search..." />
    <ul>
      <li v-for="document in documents" :key="document.slug">
        <nuxt-link :to="document.path">{{ document.title }}</nuxt-link>
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
      const q = route.query.q
      let query = $content('projects', { deep: true }).sortBy('date', 'desc')
      if (q) {
        query = query.search(q)
        // OR query = query.search('title', q)
      }
      const documents = await query.where({ index: { $ne: true } }).fetch()

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
