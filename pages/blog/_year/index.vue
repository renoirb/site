<template>
  <div class="pages__blog__year--index">
    <div class="document document--collection">
      <div class="body">
        <blog-list-model-by-year
          :show-year="false"
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
  import { INuxtContentIndexResult } from '~/lib'
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
            'updated',
            'locale',
            'tags',
            'path',
            'slug',
            'title',
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
