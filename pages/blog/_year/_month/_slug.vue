<template>
  <div class="pages__blog__year__month__slug--item">
    <very-old-article
      :locale="document.locale || 'en-CA'"
      :date="document.date"
      class="my-4"
    />
    <div class="document document--item">
      <div class="title page-title mb-2">
        <h1>
          {{ document.title }}
        </h1>
      </div>
      <app-article-tags :document="document" class="mt-0 mb-5" />
      <div class="body mt-10">
        <nuxt-content :document="document" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import AppArticleTags from '~/components/AppArticleTags.vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    document: INuxtContentResult
    year: string
    month: string
    slug: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'app-article-tags': AppArticleTags,
    },
    async asyncData({ $content, params, error }) {
      const { year, month, slug } = params

      let document: INuxtContentResult | void

      try {
        document = await $content('blog', year, month, slug).fetch()
      } catch (e) {
        error({ message: 'Document not found' })
      }

      return {
        year,
        month,
        slug,
        document,
      }
    },
    head() {
      const {
        locale = 'en-CA',
        title,
        tags = [],
        categories = [],
      } = this.document

      const meta = [
        {
          hid: 'keywords',
          name: 'keywords',
          content: [...categories, ...tags].join(' '),
        },
      ]

      const htmlAttrs = {
        lang: locale,
      }

      const out = {
        htmlAttrs,
        title,
        meta,
      }
      return out
    },
  })
</script>
