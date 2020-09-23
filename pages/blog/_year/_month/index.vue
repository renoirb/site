<template>
  <div class="pages__blog__year__month--index">
    <div class="document document--collection">
      <div class="title page-title">
        <h1>{{ pageTitle }}</h1>
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
  import {
    INuxtContentIndexResult,
    transformToPrettyfiedTemporalDate,
  } from '~/lib'
  export interface Data {
    contents: INuxtContentIndexResult[]
    pageTitle: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'blog-list-model-by-year': BlogListModelByYear,
    },
    async asyncData({ $content, params }) {
      const locale = 'fr-CA'
      const { year, month } = params

      let contents: INuxtContentIndexResult[] = []
      try {
        contents = await $content('blog', year, month, { deep: true })
          .sortBy('date', 'desc')
          .only([
            'createdAt',
            'date',
            'locale',
            'path',
            'slug',
            'tags',
            'title',
          ])
          .fetch()
      } catch (_) {
        // ...
      }

      const dtfo: Intl.DateTimeFormatOptions = {
        year: undefined,
        month: 'long',
      }
      const prettyfiedTemporalDate = transformToPrettyfiedTemporalDate(
        params,
        locale,
        dtfo,
      )
      const { prettified = '...' } = prettyfiedTemporalDate

      const publishedIn = locale.startsWith('fr') ? 'Publié en' : 'Published in'
      const pageTitle = `${publishedIn} ${prettified}`

      const length = (contents || []).length
      // eslint-disable-next-line
      console.info('pages/blog/_year/_month/index.vue asyncData', {
        params,
        length,
      })

      return {
        contents,
        pageTitle,
      }
    },
    head() {
      const out = {
        title: this.pageTitle,
      }
      return out
    },
  })
</script>
