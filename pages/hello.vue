<template>
  <section
    id="is"
    class="w-2/3 m-20 mx-auto font-sans text-xl"
    itemscope
    itemtype="http://schema.org/Person"
  >
    <div
      class="md:float-left sm:float-none md:m-0 md:my-2 md:mr-4 md:w-1/4 sm:m-20 sm:mb-10"
    >
      <img itemprop="image" src="@/assets/images/avatar.jpg" />
    </div>
    <nuxt-content :document="content" />
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import type {
    INuxtContentResult,
    /*                       */
  } from '~/lib'
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
  :target.is-fe-pulse {
    padding: 10px 0;
    border: dotted !important;
    text-align: center;
  }
  @keyframes pulse {
    from {
      transform: scale(1.1);
    }
    50% {
      transform: scale(0.85);
    }
    to {
      transform: scale(1.1);
    }
  }
  :target.is-fe-pulse.fe-pulse-w-pause {
    animation-name: pulse;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  :target.is-fe-pulse.fe-pulse-w-pause:hover,
  :target.is-fe-pulse.fe-pulse-w-pause:focus {
    animation-name: unset;
  }
</style>
