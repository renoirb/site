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
      <client-only>
        <inline-svg
          v-if="$colorMode.value === 'light'"
          :src="require('~/assets/images/icon-sun.svg')"
          class="w-6 h-6"
        />
        <inline-svg
          v-else
          :src="require('~/assets/images/icon-moon.svg')"
          class="w-6 h-6"
        />
      </client-only>
    </button>
  </span>
</template>

<script lang="ts">
  import Vue from 'vue'
  // @ts-ignore
  import InlineSvg from 'vue-inline-svg'
  export interface Data {}
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      InlineSvg,
    },
  })
</script>
