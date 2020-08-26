<template>
  <v-app dark>
    <DefaultHeader />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <DefaultFooter />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  components: {
    DefaultHeader: () => import('~/components/layout/DefaultHeader.vue'),
    DefaultFooter: () => import('~/components/layout/DefaultFooter.vue'),
  },
})
</script>
