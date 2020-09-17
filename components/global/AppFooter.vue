<template>
  <div class="app-footer--component disposition-parent w-full">
    <footer
      class="zone__sandwich__bottom container flex items-center justify-between p-10 mx-auto"
    >
      <dl class="contact items-item disposition-item">
        <dt class="mb-4 font-serif text-2xl">Contact</dt>
        <dd>{{ description }}</dd>
        <dd class="underline">
          <a :href="`mailto:${email}`">{{ email }}</a>
        </dd>
        <dd class="font-mono">v{{ version }}</dd>
      </dl>
      <div class="items-item disposition-item">
        <app-color-mode />
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { IAppIdentity } from '~/lib'
  export interface Data {}
  export interface Methods {}
  export interface Computed {}
  export interface Props extends IAppIdentity {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppFooter' /* app-footer */,
    props: {
      email: {
        type: String,
        required: false,
        default: 'root@localhost',
      },
      name: {
        type: String,
        required: false,
        default: 'My Site',
      },
      description: {
        type: String,
        required: false,
        default: '',
      },
      homepage: {
        type: String,
        required: false,
        default: 'https://github.com/renoirb/site',
      },
      version: {
        type: String,
        required: false,
        default: '1.0.0',
      },
    },
  })
</script>

<style scoped>
  .contact dd {
    @apply text-sm;
  }
</style>
