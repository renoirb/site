<template>
  <app-side-bar :nav="nav" @side-bar-open="onOpen($event)">
    <template #default>
      <NuxtLink
        v-for="({ label, to }, index) of nav"
        :key="`${label}--${index}`"
        :to="to"
        class="hover:opacity-100 opacity-80 hover:underline flex items-center p-3 px-4 py-2 mr-2 font-medium text-center rounded"
      >
        {{ label }}
      </NuxtLink>
    </template>
  </app-side-bar>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { IAppHeaderNavItems, appHeaderNav } from '~/lib'
  export interface Data {
    nav: IAppHeaderNavItems[]
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppHeader' /* app-header */,
    data() {
      return {
        nav: appHeaderNav,
      }
    },
    methods: {
      onOpen(isOpen: boolean) {
        this.$emit('side-bar-open', isOpen)
      },
    },
  })
</script>

<style scoped>
  .nuxt-link-active {
    @apply underline;
  }
</style>
