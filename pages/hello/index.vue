<template>
  <section
    id="is"
    class="content-center w-2/3 m-20 mx-auto font-sans text-xl"
    itemscope
    itemtype="http://schema.org/Person"
  >
    <b class="w-150 float-left my-2 mr-4">
      <img width="150" itemprop="image" src="@/assets/images/avatar.jpg" />
    </b>
    <nuxt-content :document="content" />
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    content: INuxtContentResult
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    layout: 'nothing-around-stuff-in-middle',
    async asyncData({ $content }) {
      const content = await $content('hello').fetch()
      return {
        content,
      }
    },
  })
</script>

<style>
  [itemprop='image'] {
    border-radius: 100%;
    background-clip: padding-box;
    border-color: var(--color-title);
    border-style: solid;
    border-width: 4px;
    padding: 3px;
  }
  .dark-mode [itemprop='image'] {
    border-color: #fff;
  }
  .dark-mode body {
    color: #fff !important;
  }
</style>
