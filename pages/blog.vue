<template>
  <section class="pages__blog--parent">
    <div
      class="pages-blog--parent--top justify-items-stretch sm:grid-cols-2 sm:grid-flow-row md:grid-flow-col-dense grid grid-cols-1 gap-4"
    >
      <app-bread-crumb
        v-if="!!$route && $route.params && $route.matched"
        :route="$route"
      />
      <form
        class="justify-self-end sm:w-full flex items-center justify-center"
        @submit.prevent="submit"
      >
        <label for="search" class="sr-only">Search within blog:</label>
        <input
          id="search"
          v-model="q"
          type="search"
          autocomplete="off"
          name="q"
          placeholder="e.g. linux"
          class="focus:font-bold focus:shadow-outline w-full px-4 py-2 leading-normal border border-gray-300 rounded"
        />
      </form>
    </div>
    <div class="title page-title mb-4 font-serif text-2xl italic">
      <h1>{{ pageTitle }}</h1>
    </div>
    <div class="pages-blog--parent--bottom">
      <nuxt-child :q="q" />
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  export interface Data {
    q: string
  }
  export interface Methods {}
  export interface Computed {
    pageTitle: string
  }
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'app-bread-crumb': () => import('@/components/AppBreadCrumb.vue'),
    },
    data() {
      return {
        q: '',
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
        handler(q, oldVal) {
          const router = this.$router
          // eslint-disable-next-line
          console.debug(
            'what-gets-executed-5: pages/blog.vue watch.q handler',
            {
              currentQuery: q,
              oldVal,
            },
          )
          if (router) {
            router
              .replace({ query: q !== '' ? { q } : undefined })
              .catch(() => {})
          }
        },
      },
    },
    beforeMount() {
      const { query = {} } = this.$route
      const { q = '' } = query
      this.q = typeof q === 'string' ? q : ''
    },
    methods: {
      submit() {
        // if you want to send any data into server before redirection then you can do it here
        this.$router.push('/blog?q=' + this.q)
      },
    },
    head() {
      const title = this.pageTitle
      const out = {
        title,
      }
      return out
    },
  })
</script>
