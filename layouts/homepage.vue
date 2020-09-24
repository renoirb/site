<template>
  <div class="layouts--homepage">
    <app-header class="top" />
    <main class="zone__sandwich__meat middle container mx-auto">
      <div class="grid">
        <div class="m-10">
          <nuxt />
        </div>
      </div>
    </main>
    <app-footer v-bind="appIdentity" class="bottom" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import DefaultLayout from './default.vue'
  export default Vue.extend({
    extends: DefaultLayout,
    head() {
      // https://vue-meta.nuxtjs.org/api/#htmlattrs
      const htmlAttrs = {
        class: ['layout--homepage', 'zone__sandwich'],
      }

      const out = {
        htmlAttrs,
      }
      return out
    },
  })
</script>
