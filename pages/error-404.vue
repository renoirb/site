<template>
  <section class="content-center m-20 mx-auto">
    <h1
      title="The sweaty face I make when I see an error"
      class="text-6xl antialiased font-extrabold"
    >
      <span aria-hidden>(ಠ益ಠ)’</span>
    </h1>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  export interface Data {}
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    layout: 'nothing-around-stuff-in-middle',
  })
</script>

<style>
  ::-moz-selection {
    color: #fff;
    text-shadow: none;
  }
  ::selection {
    color: #fff;
    text-shadow: none;
  }
  h1 {
    color: var(--color-subtitle);
  }
</style>
