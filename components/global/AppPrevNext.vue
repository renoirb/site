<template>
  <div class="text-md grid grid-cols-2">
    <div class="text-left">
      <NuxtLink
        v-if="prev"
        :lang="prev.locale ? prev.locale : 'en-CA'"
        :to="{ path: prev.path }"
        class="hover:underline item-prev"
      >
        {{ prev.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="text-right">
      <NuxtLink
        v-if="next"
        :lang="next.locale ? next.locale : 'en-CA'"
        :to="{ path: next.path }"
        class="hover:underline item-next"
      >
        {{ next.title }}
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
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
  a {
    @apply underline;
    color: var(--color-container-text-link);
  }
  a:hover {
    color: var(--color-container-text-link-hover);
  }
  .item-prev:before {
    content: '< ';
  }
  .item-next:after {
    content: ' >';
  }
</style>
