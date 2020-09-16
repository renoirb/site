<template>
  <div>
    <app-header />
    <main class="container mx-auto">
      <div class="grid">
        <div class="mt-5">
          <nuxt />
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    head() {
      // https://vue-meta.nuxtjs.org/api/#htmlattrs
      const htmlAttrs = {
        class: ['layout--homepage'],
      }

      const out = {
        htmlAttrs,
      }
      return out
    },
  })
</script>
