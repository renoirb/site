<template>
  <div class="grid grid-cols-2">
    <NuxtLink
      v-if="prev"
      :lang="prev.locale ? prev.locale : 'en-CA'"
      :to="{ path: prev.path }"
      class="text-primary hover:underline item-prev text-left"
    >
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :lang="next.locale ? next.locale : 'en-CA'"
      :to="{ path: next.path }"
      class="hover:underline item-next text-right"
    >
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import { INuxtContentPrevNext } from '~/lib'
  export interface Data {}
  export interface Methods {}
  export interface Computed {}
  export interface Props {
    prev: INuxtContentPrevNext | null
    next: INuxtContentPrevNext | null
  }
  /**
   * Bookmarks:
   * - https://fr.nuxtjs.org/blog/creating-blog-with-nuxt-content/#creating-a-previous-and-next-component
   */
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppPrevNext' /* app-prev-next */,
    props: {
      prev: {
        type: Object,
        default: () => null,
      } as PropOptions<INuxtContentPrevNext>,
      next: {
        type: Object,
        default: () => null,
      } as PropOptions<INuxtContentPrevNext>,
    },
  })
</script>

<style scoped>
  .item-prev:before {
    content: '< ';
  }
  .item-next:after {
    content: ' >';
  }
</style>
