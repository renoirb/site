<template>
  <div class="pages-projects--slug">
    <div class="document document--collection">
      <div class="title page-title font-serif text-2xl italic">
        <!-- eslint-disable vue/no-v-html -->
        <h1 v-html="abbreviatize(content.title)" />
      </div>
      <div class="body mt-10">
        <nuxt-content :document="content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  /** eslint-disable @typescript-eslint/no-unused-vars no-unused-vars */
  import Vue from 'vue'
  import { INuxtContentResult, abbreviatize, IAbbreviatize } from '~/lib'
  export interface Data {
    content: INuxtContentResult
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params, error }) {
      const { slug } = params
      let content

      try {
        content = await $content('projects', slug).fetch()
      } catch (e) {
        error({ message: 'Project not found' })
      }

      return {
        content,
      }
    },
    methods: {
      abbreviatize,
    },
    head() {
      const {
        locale = 'en-CA',
        title,
        tags = [],
        categories = [],
      } = this.content

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
