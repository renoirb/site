<template>
  <div class="pages__projects--index">
    <div class="document document--item">
      <div class="title page-title">
        <h1>Projects</h1>
      </div>
      <div class="body mt-8">
        <ul>
          <li
            v-for="content in contents"
            :key="content.slug"
            class="mt-0 mb-5 font-serif text-lg italic"
          >
            <nuxt-link :to="content.path" class="mb-2">
              {{ content.title }}
            </nuxt-link>
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
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    contents: INuxtContentResult
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
      const contents = await query.where({ index: { $ne: true } }).fetch()

      return {
        q,
        contents,
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
