<template>
  <div class="pages-blog--index">
    <h2>
      Search results for "
      <tt>{{ q }}</tt>
      "
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
    documents: INuxtContentResult[]
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {
    q: string
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    props: {
      q: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        documents: [],
      }
    },
    watch: {
      async q(q) {
        if (!q) {
          this.documents = []
          return
        }
        let documents: INuxtContentResult[] = []
        documents = await this.$content('blog', { deep: true })
          .sortBy('date', 'desc')
          .search(q)
          .fetch()

        console.log('pages/blog/index.vue watch.q', q) // eslint-disable-line

        this.documents = documents
      },
    },
    async beforeMount() {
      const q = this.$route.query.q || ''
      console.log('pages/blog/index.vue beforeMount', q) // eslint-disable-line
      let documents: INuxtContentResult[] = []
      let query = this.$content('blog', { deep: true }).sortBy('date', 'desc')
      if (q) {
        query = query.search(q)
      }
      documents = await query.fetch()
      this.documents = documents
    },
  })
</script>
