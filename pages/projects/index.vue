<template>
  <div class="pages__projects--index">
    <div class="document document--item z-30">
      <div class="title page-title font-serif text-2xl italic">
        <h1>{{ pageTitle }}</h1>
      </div>
      <div class="body mt-8">
        <ul>
          <li
            v-for="content in contents"
            :key="content.slug"
            class="mt-0 mb-5 font-serif text-lg italic"
          >
            <!-- eslint-disable vue/no-v-html -->
            <NuxtLink
              :to="content.path"
              class="mb-2"
              :lang="content.locale ? content.locale : 'en-CA'"
              v-html="abbreviatize(content.title)"
            />
            <app-article-tags
              :link="false"
              :content="content"
              class="mt-2 mb-4"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult, abbreviatize, IAbbreviatize } from '~/lib'
  export interface Data {
    contents: INuxtContentResult
    pageTitle: string
    q: string
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
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
      const contents = await query.where({ index: { $ne: true } }).fetch()
      const pageTitle = `Personal projects I’ve worked on`

      return {
        contents,
        pageTitle,
        q,
      }
    },
    watch: {
      q() {
        this.$router
          .replace({ query: this.q ? { q: this.q } : undefined })
          .catch(() => {})
      },
    },
    methods: {
      abbreviatize,
    },
    head() {
      const out = {
        title: this.pageTitle,
      }
      return out
    },
  })
</script>
