<template>
  <div class="pages-blog--index">
    <div class="document document--item z-30">
      <div
        class="body"
        :data-count="contents.length"
      >
        <blog-list-model-by-year :contents="contents" />
      </div>
      <rb-notice-box v-if="contents.length > 40" variant="info" lang="en">
        <strong slot="header">Apologies for the long list</strong>
        <p>Yes, I should have a paginator.</p>
        <p>
          It’s planned
          <a href="https://github.com/renoirb/site/issues/56" target="_blank">
            renoirb/site#56 <small>(GitHub) </small>
          </a>
        </p>
      </rb-notice-box>
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
    pageTitle: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'blog-list-model-by-year': BlogListModelByYear,
    },
    async asyncData({ $content, route }) {
      let contents: INuxtContentIndexResult[] = []
      contents = await queryNuxtContent($content, route)
      return {
        contents,
        pageTitle: 'Blog',
      }
    },
    /*
    async beforeMount() {
      const contents = await queryNuxtContent(this.$content, this.$route)
      // This is wrong. Improve. Plz
      this.contents = contents
    },
    */
  })
</script>
