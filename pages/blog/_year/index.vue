<template>
  <div class="pages__blog__year--index">
    <div class="document document--collection">
      <div
        class="body"
        :data-count="contents.length"
      >
        <blog-list-model-by-year
          :show-year="false"
          :contents="contents"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import BlogListModelByYear from '@/components/blog/BlogListModelByYear.vue'
  import {
    queryNuxtContent,
    /*                       */
  } from '~/lib'
  import type {
    INuxtContentIndexResult,
    /*                       */
  } from '~/lib'
  export interface Data {
    contents: INuxtContentIndexResult[]
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'blog-list-model-by-year': BlogListModelByYear,
    },
    async asyncData({ $content, params }) {
      const { year } = params

      let contents: INuxtContentIndexResult[] = []
      try {
        contents = await $content('blog', year, { deep: true })
          .sortBy('created', 'desc')
          .only([
            'created',
            'excerpt',
            'locale',
            'path',
            'preamble',
            'slug',
            'tags',
            'title',
            'updated',
          ])
          .fetch()
      } catch (_) {
        // ..
      }

      return {
        contents,
      }
    },
  })
</script>
