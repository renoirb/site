<template>
  <div class="pages-blog--index">
    <div class="document document--item">
      <div class="title page-title">
        <h1 v-if="q !== ''">
          Search results for "
          <tt>{{ q }}</tt>
          "
        </h1>
        <h1 v-else>Blog</h1>
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
    async asyncData({ $content, query }) {
      let { q = '' } = query
      q = typeof q === 'string' ? q : ''
      let documents: INuxtContentResult[] = []
      let ds = $content('blog', { deep: true }).sortBy('date', 'desc')
      if (q) {
        ds = ds.search(q)
      }
      documents = await ds.fetch()
      return {
        documents,
      }
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

        this.documents = documents
      },
    },
    async beforeMount() {
      let { q = '' } = this.$route.query
      q = typeof q === 'string' ? q : ''
      let documents: INuxtContentResult[] = []
      let ds = this.$content('blog', { deep: true }).sortBy('date', 'desc')
      if (q) {
        ds = ds.search(q)
      }
      documents = await ds.fetch()
      this.documents = documents
    },
  })
</script>
