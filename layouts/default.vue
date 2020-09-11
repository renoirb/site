<template>
  <div>
    <default-header />
    <main class="container px-2 mx-auto">
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
        class: ['light-mode', 'layout--default'],
      }

      const out = {
        htmlAttrs,
      }
      return out
    },
  })
</script>
