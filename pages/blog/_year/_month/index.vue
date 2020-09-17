<template>
  <div class="pages__blog__year__month--index">
    <div class="document document--collection">
      <div class="title page-title">
        <h1>{{ pageTitle }}</h1>
      </div>
      <div class="body">
        <ul>
          <li
            v-for="document in documents"
            :key="document.slug"
            :lang="document.locale ? document.locale : 'en-CA'"
          >
            <nuxt-link :to="document.path">
              {{ document.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Temporal } from 'proposal-temporal'
  import { INuxtContentIndexResult } from '~/lib'
  export interface Data {
    documents: INuxtContentIndexResult[]
    year: string
    month: string
    pageTitle: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params }) {
      const { year, month } = params

      let documents: INuxtContentIndexResult[] = []
      documents = await $content('blog', year, month, { deep: true })
        .sortBy('date', 'desc')
        .only(['title', 'date', 'slug', 'locale', 'path'])
        .fetch()

      let temporalDate: Temporal.Date | null = null

      temporalDate = Temporal.Date.from(`${year}-${month}-01`)
      const locale = 'fr-CA'
      const publishedIn = locale.startsWith('fr') ? 'Publié en' : 'Published in'
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#Syntax
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#Using_options
      const localeStringOptions = {
        year: 'numeric',
        month: 'long',
      }
      const localeString = temporalDate.toLocaleString(
        locale,
        localeStringOptions,
      )
      const pageTitle = `${publishedIn} ${localeString}`

      return {
        pageTitle,
        documents,
        year,
        month,
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
