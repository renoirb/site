<template>
  <div class="pages__blog__tag--index">
    <div class="document document--collection">
      <div class="title page-title font-serif text-2xl italic">
        <h1>All tags</h1>
      </div>
      <div class="body">
        <ul>
          <li v-for="tag in tags" :key="tag">
            <NuxtLink :to="`/blog/tag/${tag}`">
              {{ tag }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    tags: string[]
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  const tags = new Set<string>()
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content }) {
      let contents: INuxtContentResult[] = []
      contents = await $content('blog', { deep: true })
        .sortBy('createdAt', 'desc')
        .fetch()

      for (const content of contents) {
        if ('tags' in content) {
          // @ts-ignore
          tags.add(...(content.tags || []))
        }
      }
      for (const [tag] of tags.entries()) {
        if (typeof tag !== 'string' || tag.replace(/[\s\t/]/g, '') === '') {
          tags.delete(tag)
        }
      }
      return {
        tags,
      }
    },
  })
</script>
