<template>
  <app-side-bar :nav="nav">
    <template #default>
      <nuxt-link
        v-for="({ label, to }, index) of nav"
        :key="`${label}--${index}`"
        :to="to"
        class="hover:opacity-100 flex items-center p-3 px-4 py-2 mr-2 font-medium text-center rounded opacity-75"
      >
        {{ label }}
      </nuxt-link>
    </template>
  </app-side-bar>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { IAppHeaderNavItems } from '~/lib'
  const nav: IAppHeaderNavItems[] = [
    {
      label: 'Blog',
      to: '/blog',
    },
    {
      label: 'About',
      to: '/hello',
    },
  ]
  export interface Data {
    nav: IAppHeaderNavItems[]
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    data() {
      return {
        nav,
      }
    },
  })
</script>
