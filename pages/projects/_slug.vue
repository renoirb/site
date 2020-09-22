<template>
  <div class="pages-projects--slug">
    <app-bread-crumb :route="$route" class="flex" />!
    <div class="document document--collection">
      <div class="title page-title">
        <h1>{{ content.title }}</h1>
      </div>
      <div class="body">
        <nuxt-content :document="content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  /** eslint-disable @typescript-eslint/no-unused-vars no-unused-vars */
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    content: INuxtContentResult
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params, error }) {
      const { slug } = params
      let content

      try {
        content = await $content('projects', slug).fetch()
      } catch (e) {
        error({ message: 'Project not found' })
      }

      return {
        content,
      }
    },
  })
</script>
