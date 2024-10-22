<template>
  <div />
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    createVueMetaInfo,
    /*                       */
  } from '~/lib'
  export interface Data {}
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    head() {
      const redirect = '/contact'
      const out = createVueMetaInfo({ redirect })
      return out
    },
  })
</script>
