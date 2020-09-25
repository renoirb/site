<template>
  <div class="pages-blog--index">
    <div class="document document--item">
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
    async asyncData({ $content, route, query }) {
      let { q = '' } = query
      q = typeof q === 'string' ? q : ''

      let contents: INuxtContentResult[] = []
      contents = await queryNuxtContent($content, route)

      console.info('pages/blog/index.vue asyncData', { currentQuery: q }) // eslint-disable-line

      return {
        contents,
      }
    },
    data() {
      return {
        contents: [] as INuxtContentResult[],
      }
    },
    computed: {
      pageTitle(): string {
        let pageTitle = 'Blog'
        const q = this.q
        if (q !== '') {
          pageTitle += `, search results for «${q}»`
        }
        return pageTitle
      },
    },
    watch: {
      q: {
        immediate: true,
        async handler(val, oldVal) {
          if (!val) {
            this.contents = [] as INuxtContentResult[]
            // eslint-disable-next-line
            console.info('pages/blog/index.vue watch.q 1', {
              currentQuery: val,
              oldVal,
            })
            return
          }
          if (val === oldVal) {
            // No change, nothing to do
            // eslint-disable-next-line
            console.info('pages/blog/index.vue watch.q 2', {
              currentQuery: val,
              oldVal,
            })
            return
          }
          const q = this.q
          // eslint-disable-next-line
          console.info('pages/blog/index.vue watch.q 3', {
            currentQuery: q,
            oldVal,
          })

          const contents = await queryNuxtContent(this.$content, this.$route)
          this.contents = contents
        },
      },
    },
    async beforeMount() {
      let { q = '' } = this.$route.query
      q = typeof q === 'string' ? q : ''
      console.info('pages/blog/index.vue beforeMount', { currentQuery: q }) // eslint-disable-line

      const contents = await queryNuxtContent(this.$content, this.$route)
      this.contents = contents
    },
  })
</script>
