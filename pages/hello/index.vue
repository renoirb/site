<template>
  <section id="is" class="about" itemscope itemtype="http://schema.org/Person">
    <b class="pull-left" style="display: block">
      <img width="150" alt itemprop="image" src="@/assets/images/avatar.jpg" />
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

<style lang="css" scoped>
  @import './style.css';
</style>
