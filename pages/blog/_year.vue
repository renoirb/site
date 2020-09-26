<template>
  <div>
    <app-months-in-year
      v-if="!$route.params.slug"
      :year="$route.params.year"
      :current-month="$route.params.month"
    />
    <h1
      v-if="!$route.params.slug"
      class="title page-title mt-4 mb-4 font-serif text-2xl italic"
    >
      {{ pageTitle }}
    </h1>
    <div>
      <nuxt-child />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import AppMonthsInYear from '@/components/AppMonthsInYear.vue'
  export interface Data {
    pageTitle: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'app-months-in-year': AppMonthsInYear,
    },
    asyncData({ app }) {
      let pageTitle = ''
      // @ts-ignore
      if (app && app.head && app.head.title) {
        // @ts-ignore
        pageTitle = app.head.title
      }

      return {
        pageTitle,
      }
    },
  })
</script>
