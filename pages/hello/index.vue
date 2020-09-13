<template>
  <section
    id="is"
    class="content-center w-2/3 m-20 mx-auto font-sans text-xl"
    itemscope
    itemtype="http://schema.org/Person"
  >
    <b class="w-150 float-left my-2 mr-4">
      <app-image
        width="150"
        itemprop="image"
        src="@/assets/images/avatar.jpg"
      />
    </b>
    <nuxt-content :document="document" />
  </section>
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
    layout: 'blank',
    async asyncData({ $content }) {
      const document = await $content('hello').fetch()
      return {
        document,
      }
    },
  })
</script>

<style scoped>
  [itemprop='image'] {
    border-radius: 100%;
    background-clip: padding-box;
    border-color: #fff;
    border-style: solid;
    padding: 3px;
  }
</style>
