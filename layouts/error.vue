<template>
  <div>
    <h1
      v-if="error.statusCode === 404"
      :data-error="JSON.stringify(error || {})"
      class="some-class-name so-prettier-would catch-this and-how about-those css-class-names tag-soup that-are getting-popular as-if-we forgot-how we-had to-do-this back-in-the-days-of-html3"
    >
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export interface Data {
    pageNotFound: string
    otherError: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {
    error: null | { statusCode: number }
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    layout: 'blank',
    props: {
      error: {
        type: Object,
        default: null,
      },
    },
    data() {
      return {
        pageNotFound: '404 Not Found',
        otherError: 'An error occurred',
      }
    },
    head() {
      const title =
        this.error && this.error.statusCode === 404
          ? this.pageNotFound
          : this.otherError
      return {
        title,
      }
    },
  })
</script>

<style scoped>
  h1 {
    font-size: 20px;
  }
</style>
