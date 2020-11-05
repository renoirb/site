<template>
  <span class="inline-flex">
    <button
      class="hover:text-primary-500 focus:outline-none transition duration-150 ease-in-out rounded-md"
      aria-label="Color Mode"
      @click="
        $colorMode.value === 'dark'
          ? ($colorMode.preference = 'light')
          : ($colorMode.preference = 'dark')
      "
    >
      <inline-svg
        :hidden="$colorMode.value === 'light'"
        title="Set to Light mode"
        lang="en"
        :class="{
          'h-6': true,
          'w-6': true,
        }"
        :src="require('~/assets/images/icon-sun.svg')"
      />
      <inline-svg
        :hidden="$colorMode.value === 'dark'"
        title="Set to Dark mode"
        lang="en"
        :class="{
          'h-6': true,
          'w-6': true,
        }"
        :src="require('~/assets/images/icon-moon.svg')"
      />
    </button>
  </span>
</template>

<script lang="ts">
  import Vue from 'vue'
  export interface Data {}
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      // @ts-ignore
      'inline-svg': () => import('vue-inline-svg'),
    },
  })
</script>
