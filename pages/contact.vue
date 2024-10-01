<template>
  <div class="document document--item z-30">
    <header class="title page-title mb-4 font-serif text-2xl italic">
      <h1>{{ title }}</h1>
    </header>
    <div class="body">
      <iframe
        src="https://cal.com/renoirb"
        width="100%"
        class="h-screen min-w-full min-h-full"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    createVueMetaInfo,
  } from '~/lib'
  export interface Data {
    title: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  const PAGE_TITLE = 'Contact'
  export default Vue.extend<Data, Methods, Computed, Props>({
    data() {
      return {
        title: PAGE_TITLE,
      }
    },
    head() {
      const out = createVueMetaInfo({ title: this.$data.title })
      return out
    },
  })
</script>
