<template>
  <div class="pages__blog__tag--item">
    <div class="document document--collection">
      <div class="title page-title font-serif text-2xl italic">
        <h1>
          Under tag
          <!-- eslint-disable vue/no-v-html -->
          <em v-html="abbreviatize(tag)" />
        </h1>
      </div>
      <div class="body">
        <blog-list-model-by-year
          :contents="contents"
          :q="$route && $route.query && $route.query.q"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import BlogListModelByYear from '@/components/blog/BlogListModelByYear.vue'
  import { INuxtContentResult, abbreviatize, IAbbreviatize } from '~/lib'
  export interface Data {
    contents: INuxtContentResult
    tag: string
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'blog-list-model-by-year': BlogListModelByYear,
    },
    async asyncData({ $content, params }) {
      const { tag } = params

      /**
       * Figuring out how to list when has tag string
       * with same text content, case-insensITiVe.
       *
       * Bookmarks:
       * - https://github.com/nuxt/content/issues/577#
       * - https://github.com/techfort/LokiJS/wiki/Query-Examples#find-queries
       */
      const predicate = {
        tags: { $contains: tag /* Figure out how to be case-insensitive */ },
      } as any
      let contents: INuxtContentResult[] = []
      const maybe: INuxtContentResult[] = await $content('blog', { deep: true })
        .where(predicate)
        .sortBy('createdAt', 'desc')
        .fetch()

      contents = Array.isArray(maybe) ? maybe : ([] as INuxtContentResult[])
      return {
        contents,
        tag,
      }
    },
    methods: {
      abbreviatize,
    },
  })
</script>
