<template>
  <div class="pages__blog__year__month__slug--item">
    <very-old-article
      :locale="document.locale || 'en-CA'"
      :date="document.date"
    />
    <div class="taxonomy">
      <strong id="document-tags" class="taxonomy-label">Tags</strong>
      <ul
        v-if="tags.length > 0"
        aria-labelledby="document-tags"
        class="taxonomy-items"
      >
        <li v-for="tag in tags" :key="tag">
          <nuxt-link :to="`/blog/tag/${tag}`">
            {{ tag }}
          </nuxt-link>
        </li>
      </ul>
      <span v-else class="taxonomy-items">(...)</span>
    </div>
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
    async asyncData({ $content, params, error }) {
      const { year, month, slug } = params
      const tagsSet = new Set<string>()

      let document: INuxtContentResult | void

      try {
        document = await $content('blog', year, month, slug).fetch()
      } catch (e) {
        error({ message: 'Document not found' })
      }
      if (document) {
        // ... yeah, TypeScript assertion functions. not now!
        // @ts-ignore
        const { tags = [] } = document
        if (tags && Array.isArray(tags)) {
          // @ts-ignore
          tagsSet.add(...tags)
        }
      }

      return {
        year,
        month,
        slug,
        document,
        tags: tagsSet,
      }
    },
  })
</script>
