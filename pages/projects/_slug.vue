<template>
  <div class="pages-projects--slug">
    <div class="document document--collection">
      <div class="title page-title">
        <h1>{{ document.title }}</h1>
      </div>
      <div class="body">
        <nuxt-content :document="document" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    document: INuxtContentResult
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params, error }) {
      const { slug } = params
      let document

      try {
        document = await $content('projects', slug).fetch()
      } catch (e) {
        error({ message: 'Project not found' })
      }

      return {
        document,
      }
    },
  })
</script>
