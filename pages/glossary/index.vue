<template>
  <div class="pages__glossary--index">
    <div class="document document--collection">
      <div class="body">
        <ul>
          <li v-for="item in contents" :key="item.slug">
            <NuxtLink :to="`/${urlParam}/${item.slug}`">
              {{ item.title }}
            </NuxtLink>
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
    title: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content }) {
      let contents: INuxtContentIndexResult[] = []
      try {
        contents = await $content('glossary')
          .sortBy('title', 'desc')
          .only(['locale', 'path', 'slug', 'title'])
          .fetch()
      } catch (_) {
        // ..
      }

      return {
        contents,
        title: 'Glossary',
        urlParam: 'glossary',
      }
    },
  })
</script>
