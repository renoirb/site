<template>
  <v-footer :absolute="!fixed" app>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    props: {
      fixed: {
        type: Boolean,
        default: false,
      },
    },
  })
</script>
