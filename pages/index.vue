<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text> Hello world </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  export interface Data {
    baseUrl: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    asyncData(ctx) {
      const baseUrl = ctx.base
      return {
        baseUrl,
      }
    },
    head() {
      const to = this.baseUrl.replace(/\/$/, '') + '/hello'
      return {
        meta: [
          { hid: 'http-equiv', name: 'http-equiv', content: `0; URL=${to}` },
        ],
      }
    },
  })
</script>
