<template>
  <div class="pages-blog--index">
    <div class="document document--item z-30">
      <div class="body">
        <blog-list-model-by-year :contents="contents" :q="q" />
      </div>
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
      }
    },
    data() {
      return {
        contents: [] as INuxtContentResult[],
        pageTitle: 'Blog',
      }
    },
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
      this.contents = contents
    },
  })
</script>
