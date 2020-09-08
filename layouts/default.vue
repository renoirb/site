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
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-apps',
            title: 'Welcome',
            to: '/',
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire',
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Hello',
            to: '/hello',
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Blog',
            to: '/blog',
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Resume',
            to: '/resume',
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'cv',
            to: '/cv',
          },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js',
      }
    },
  })
</script>
