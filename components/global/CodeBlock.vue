<template>
  <div class="code-block" :class="[active && 'active']">
    <slot />
  </div>
</template>

<script>
  import Vue from 'vue'
  /**
   * Bookmark:
   * - https://github.com/nuxt/content/blob/%40nuxt/content-theme-docs%400.6.0/packages/theme-docs/src/components/global/base/CodeBlock.vue
   */
  export default Vue.extend({
    name: 'CodeBlock' /* code-block */,
    props: {
      label: {
        type: String,
        required: true,
      },
      active: {
        type: Boolean,
        default: false,
      },
    },
  })
</script>

<style scoped>
  .code-block {
    display: none;
  }
  .code-block.active {
    display: block;
  }
</style>
