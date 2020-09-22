<template>
  <div class="pages__blog__year--index">
    <div class="document document--collection">
      <div class="title page-title">
        <h1>
          Published in <em>{{ year }}</em>
        </h1>
      </div>
      <div class="body">
        <ul>
          <li
            v-for="content in contents"
            :key="content.slug"
            class="mb-1 text-lg"
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
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentIndexResult } from '~/lib'
  export interface Data {
    contents: INuxtContentIndexResult[]
    year: string
    pageTitle: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params }) {
      const { year } = params

      let contents: INuxtContentIndexResult[] = []
      contents = await $content('blog', year, { deep: true })
        .sortBy('date', 'desc')
        .only(['title', 'date', 'createdAt', 'slug', 'locale', 'path'])
        .fetch()

      const pageTitle = `Published in ${year}`

      return {
        pageTitle,
        contents,
        year,
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
