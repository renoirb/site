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
            v-for="content in contents"
            :key="content.slug"
            :lang="content.locale ? content.locale : 'en-CA'"
          >
            <nuxt-link :to="content.path">
              {{ content.title }}
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
    contents: INuxtContentResult[]
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
      let contents: INuxtContentResult[] = []
      let ds = $content('blog', { deep: true }).sortBy('date', 'desc')
      if (q) {
        ds = ds.search(q)
      }
      contents = await ds.fetch()
      return {
        contents,
      }
    },
    data() {
      return {
        contents: [],
      }
    },
    watch: {
      async q(q) {
        if (!q) {
          this.contents = []
          return
        }
        let contents: INuxtContentResult[] = []
        contents = await this.$content('blog', { deep: true })
          .sortBy('date', 'desc')
          .search(q)
          .fetch()

        this.contents = contents
      },
    },
    async beforeMount() {
      let { q = '' } = this.$route.query
      q = typeof q === 'string' ? q : ''
      let contents: INuxtContentResult[] = []
      let ds = this.$content('blog', { deep: true }).sortBy('date', 'desc')
      if (q) {
        ds = ds.search(q)
      }
      contents = await ds.fetch()
      this.contents = contents
    },
  })
</script>
