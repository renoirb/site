<template>
  <div class="pages__blog__year__month--index">
    <div class="document document--collection">
      <div class="title page-title">
        <h1>{{ pageTitle }}</h1>
      </div>
      <div class="body">
        <ul>
          <li
            v-for="content in contents"
            :key="content.slug"
            :lang="content.locale ? content.locale : 'en-CA'"
          >
            <nuxt-link
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
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    INuxtContentIndexResult,
    transformToPrettyfiedTemporalDate,
  } from '~/lib'
  export interface Data {
    contents: INuxtContentIndexResult[]
    pageTitle: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params }) {
      const locale = 'fr-CA'
      const { year, month } = params

      let contents: INuxtContentIndexResult[] = []
      try {
        contents = await $content('blog', year, month, { deep: true })
          .sortBy('date', 'desc')
          .only(['createdAt', 'date', 'locale', 'path', 'slug', 'title'])
          .fetch()
      } catch (_) {
        // ...
      }

      const dtfo: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
      }
      const prettyfiedTemporalDate = transformToPrettyfiedTemporalDate(
        params,
        locale,
        dtfo,
      )
      const { prettified = '...' } = prettyfiedTemporalDate

      const publishedIn = locale.startsWith('fr') ? 'Publié en' : 'Published in'
      const pageTitle = `${publishedIn} ${prettified}`

      const length = (contents || []).length
      // eslint-disable-next-line
      console.log('pages/blog/_year/_month/index.vue asyncData', {
        params,
        length,
      })

      return {
        contents,
        pageTitle,
      }
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
