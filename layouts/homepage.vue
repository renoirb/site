<template>
  <div class="layouts--homepage">
    <inline-svg
      :src="require('~/assets/images/2235845.svg')"
      width="1200"
      height="1200"
      style="
        fill: var(--color-sandwich-left-splat-bg) !important;
        position: fixed;
        rotate: -120deg;
        left: -500px;
        z-index: -2;
        top: 1%;
        margin-top: -300px;
      "
      class="lg:visible z-10 invisible"
    ></inline-svg>
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
