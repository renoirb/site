<template>
  <div class="pages__blog__year__month__slug--item">
    <very-old-article
      :locale="document.locale || 'en-CA'"
      :date="document.date"
    />
    <app-article-tags :document="document" />
    <div class="document">
      <div class="title">
        <h2>{{ document.title }}</h2>
      </div>
      <div class="body">
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
