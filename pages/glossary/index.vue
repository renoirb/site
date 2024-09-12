<template>
  <div class="pages__glossary--index">
    <div class="document document--collection">
      <div class="body">
        <ul>
          <li v-for="item in contents" :key="item.slug">
            <NuxtLink :to="`/${urlParam}/${item.slug}`">
              <AppContentDate :content="item" />
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
  import type { INuxtContentIndexResult } from '~/lib'
  export interface Data {
    contents: INuxtContentIndexResult[]
    title: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, route, error }) {
      const { name } = route
      if (typeof name !== 'string') {
        return error({ statusCode: 404, message: `Not Found` })
      }
      const dataModelName = name.replace('-slug', '')
      const title =
        dataModelName.charAt(0).toUpperCase() + dataModelName.slice(1)
      let contents: INuxtContentIndexResult[] = []
      try {
        contents = await $content(dataModelName)
          .sortBy('title', 'desc')
          .only(['created', 'updated', 'locale', 'path', 'slug', 'title'])
          .fetch()
      } catch (_) {
        // ..
      }

      return {
        contents,
        title,
        urlParam: dataModelName,
      }
    },
  })
</script>
