<template>
  <div class="pages-blog--index">
    <div class="document document--item">
      <div class="title page-title">
        <h1 v-if="q !== ''">
          Blog, search results for "<tt>{{ q }}</tt
          >"
        </h1>
        <h1 v-else>Blog</h1>
      </div>
      <div class="body">
        <div
          v-for="inThatYear in contents"
          :key="`buckets-year-${inThatYear[0]}`"
          class="mb-8"
        >
          <nuxt-link
            :to="{
              path: `/blog/${inThatYear[0]}`,
              query: { q: q ? q : undefined },
            }"
          >
            <h2 class="font-serif text-xl italic">{{ inThatYear[0] }}</h2>
          </nuxt-link>
          <ul>
            <li
              v-for="content in inThatYear[1]"
              :key="content.slug"
              class="mb-8 text-lg"
            >
              <nuxt-link
                :lang="content.locale ? content.locale : 'en-CA'"
                :to="{
                  path: content.path,
                  meta: {
                    locale: content.locale ? content.locale : 'en-CA',
                    date: content.date,
                  },
                }"
              >
                {{ content.title }}
              </nuxt-link>
              <app-article-tags
                :link="false"
                :content="content"
                class="mt-0 mb-4"
              />
            </li>
          </ul>
          <div class="h-5 -ml-10" style="background-color: var(--bg)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    INuxtContentResult,
    breakIntoYears,
    INuxtContentByYears,
  } from '~/lib'
  export interface Data {
    contents: INuxtContentByYears
    currentQuery: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {
    q: string
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    props: {
      q: {
        type: String,
        default: '',
      },
    },
    async asyncData({ $content, query }) {
      let { q = '' } = query
      q = typeof q === 'string' ? q : ''
      let contents: INuxtContentResult[] = []
      let ds = $content('blog', { deep: true }).sortBy('createdAt', 'desc')
      if (q) {
        ds = ds.search(q)
      }
      contents = await ds.fetch()

      const buckets = breakIntoYears(contents)

      console.log('pages/blog/index.vue asyncData', { currentQuery: q }) // eslint-disable-line

      return {
        contents: buckets,
        currentQuery: q,
      }
    },
    data() {
      return {
        contents: [],
        currentQuery: '',
      }
    },
    watch: {
      async q(q) {
        if (!q) {
          this.contents = []
          return
        }
        let contents: INuxtContentResult[] = []
        contents = await this.$content('blog', { deep: true })
          .sortBy('date', 'desc')
          .search(q)
          .fetch()

        console.log('pages/blog/index.vue watch q', { currentQuery: q }) // eslint-disable-line

        const buckets = breakIntoYears(contents)
        this.contents = buckets
      },
    },
    async beforeMount() {
      let { q = '' } = this.$route.query
      q = typeof q === 'string' ? q : ''
      let contents: INuxtContentResult[] = []
      let ds = this.$content('blog', { deep: true }).sortBy('date', 'desc')
      if (q) {
        ds = ds.search(q)
      }
      console.log('pages/blog/index.vue beforeMount', { currentQuery: q }) // eslint-disable-line
      contents = await ds.fetch()
      const buckets = breakIntoYears(contents)
      this.contents = buckets
    },
    head() {
      let title = 'Blog'
      if (this.q !== '') {
        title += `, search results for «${this.q}»`
      }
      const out = {
        title,
      }
      return out
    },
  })
</script>
