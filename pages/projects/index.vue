<template>
  <div class="pages__projects--index">
    <div class="document document--item z-30">
      <div class="title page-title font-serif italic" :lang="pageLocale">
        <h1 class="text-2xl">{{ pageTitle }}</h1>
        {{ pageBlurb }}
      </div>
      <div class="body mt-8">
        <ul>
          <li
            v-for="content in contents"
            :key="content.slug"
            :lang="content.locale"
            class="mt-0 mb-5"
          >
            <!-- eslint-disable vue/no-v-html -->
            <h2 class="mb-2 font-serif text-xl italic">
              <nuxt-link
                class="no-underline"
                :to="content.path"
                :lang="content.locale ? content.locale : 'en-CA'"
                v-html="abbreviatize(content.title)"
              />
            </h2>
            <app-article-tags
              v-if="Array.isArray(content.tags) && content.tags.length > 0"
              :link="false"
              :content="content"
              class="mt-2 mb-4"
            ></app-article-tags>
            <p class="text-sm"><nuxt-content :document="content" /></p>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult, abbreviatize, IAbbreviatize } from '~/lib'
  export interface Data {
    contents: INuxtContentResult
    pageBlurb: string
    pageLocale: string
    pageTitle: string
    q: string
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    watchQuery: true,
    async asyncData({ $content, route }) {
      const q = route.query.q
      let query = $content('projects', { deep: true }).sortBy('created', 'desc')
      if (q) {
        query = query.search(q)
        // OR query = query.search('title', q)
      }
      // const contents = await query.where({ index: { $ne: true } }).fetch()
      const contents = await query.fetch()
      const pageLocale = 'fr-CA'
      const pageTitle = `Projets`
      const pageBlurb = `Quelques projets personnels que je publie, classé par catégories.`
      return {
        contents,
        pageBlurb,
        pageLocale,
        pageTitle,
        q,
      }
    },
    watch: {
      q() {
        this.$router
          .replace({ query: this.q ? { q: this.q } : undefined })
          .catch(() => {})
      },
    },
    methods: {
      abbreviatize,
    },
    head() {
      const out = {
        title: this.pageTitle,
      }
      return out
    },
  })
</script>
