<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col md="6" offset-md="3">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  beforeCreate() {
    // See vue-shims.d.ts!
    this.$vuetify.theme.dark = false
  },
})
</script>
