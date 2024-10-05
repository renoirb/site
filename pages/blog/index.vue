<template>
  <div class="pages-blog--index">
    <div class="document document--item z-30">
      <div
        v-memo="[contents]"
        class="body"
        :data-count="contents.length"
        data-v-memo
      >
        <blog-list-model-by-year :contents="contents" :q="q" />
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
  import { INuxtContentResult, queryNuxtContent } from '~/lib'
  export interface Data {
    contents: INuxtContentResult[]
    pageTitle: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {
    q: string
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'blog-list-model-by-year': BlogListModelByYear,
    },
    props: {
      q: {
        type: String,
        default: '',
      },
    },
    async asyncData({ $content, route }) {
      let contents: INuxtContentResult[] = []
      contents = await queryNuxtContent($content, route)
      return {
        contents,
        pageTitle: 'Blog',
      }
    },
    /*
    watch: {
      q: {
        immediate: true,
        async handler(val, oldVal) {
          let pageTitle = 'Blog'
          if (!val) {
            this.contents = [] as INuxtContentResult[]
            return
          }
          if (val === oldVal) {
            // No change, nothing to do
            return
          }
          if (val !== '') {
            pageTitle += `, search results for «${val}»`
          }
          const contents = await queryNuxtContent(this.$content, this.$route)
          this.contents = contents
          this.pageTitle = pageTitle
        },
      },
    },
    async beforeMount() {
      const contents = await queryNuxtContent(this.$content, this.$route)
      // This is wrong. Improve. Plz
      this.contents = contents
    },
    */
  })
</script>
