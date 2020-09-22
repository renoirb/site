<template>
  <div class="pages__blog__year--index">
    <div class="document document--collection">
      <div class="title page-title">
        <h1>
          {{ pageTitle }}
        </h1>
      </div>
      <div class="body">
        <ul>
          <li
            v-for="content in contents"
            :key="content.slug"
            class="mb-1 text-lg"
          >
            <!-- eslint-disable vue/no-v-html -->
            <nuxt-link
              :lang="content.locale ? content.locale : 'en-CA'"
              :to="{
                path: content.path,
                meta: {
                  locale: content.locale ? content.locale : 'en-CA',
                  date: content.date,
                },
              }"
              v-html="abbreviatize(content.title)"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentIndexResult, abbreviatize, IAbbreviatize } from '~/lib'
  export interface Data {
    contents: INuxtContentIndexResult[]
    pageTitle: string
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params }) {
      const locale = 'fr-CA'
      const { year } = params

      let contents: INuxtContentIndexResult[] = []
      try {
        contents = await $content('blog', year, { deep: true })
          .sortBy('date', 'desc')
          .only(['createdAt', 'date', 'locale', 'path', 'slug', 'title'])
          .fetch()
      } catch (_) {
        // ..
      }

      const publishedIn = locale.startsWith('fr') ? 'Publié en' : 'Published in'
      const pageTitle = `${publishedIn} ${year}`

      const length = (contents || []).length
      // eslint-disable-next-line
      console.log('pages/blog/_year/index.vue asyncData', {
        year,
        params,
        length,
      })

      return {
        pageTitle,
        contents,
      }
    },
    methods: {
      abbreviatize,
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
