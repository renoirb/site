<template>
  <div>
    <app-months-in-year
      v-if="!$route.params.slug"
      :year="$route.params.year"
      :current-month="$route.params.month"
    />
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
  })
</script>
