<template>
  <div class="pages__blog__tag--item">
    <div class="document document--collection">
      <div class="title page-title">
        <h1>
          Under tag <em>{{ tag }}</em>
        </h1>
      </div>
      <div class="body">
        <ul>
          <li
            v-for="content in contents"
            :key="content.slug"
            :lang="content.locale ? content.locale : 'en-CA'"
          >
            <nuxt-link :to="formatTo(content)">
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
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    contents: INuxtContentResult
    tag: string
  }
  export interface Methods {
    formatTo(content: INuxtContentResult): string
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params }) {
      const { tag } = params

      const contents = (await $content('blog', { deep: true })
        .where({ tags: { $contains: tag } })
        .sortBy('date', 'desc')
        .fetch()) as INuxtContentResult[]

      return {
        contents,
        tag,
      }
    },
    methods: {
      formatTo(content: INuxtContentResult): string {
        const [year, month] = String(content.date).split('-')
        const { slug } = content
        return `/blog/${year}/${month}/${slug}`
      },
    },
  })
</script>
