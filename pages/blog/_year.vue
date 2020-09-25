<template>
  <div>
    <app-months-in-year
      v-if="!$route.params.slug"
      :year="$route.params.year"
      :current-month="$route.params.month"
    />
    <h1
      :key="pageTitle"
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
  import { Route } from 'vue-router'

  import AppMonthsInYear from '@/components/AppMonthsInYear.vue'
  import { transformToPrettyfiedTemporalDate } from '~/lib'
  export interface Data {}
  export interface Methods {}
  export interface Computed {
    pageTitle: string
  }
  export interface Props {}
  export const pageTitleFn = (route: Route): string => {
    const locale = 'en-CA'

    const dtfo: Intl.DateTimeFormatOptions = {
      month: 'long',
    }
    const prettyfiedTemporalDate = transformToPrettyfiedTemporalDate(
      route.params,
      locale,
      dtfo,
    )
    const { prettified = '...' } = prettyfiedTemporalDate

    const publishedIn = locale.startsWith('fr') ? 'Publié en' : 'Published in'
    const pageTitle = `${publishedIn} ${prettified}`

    return pageTitle
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'app-months-in-year': AppMonthsInYear,
    },
    asyncData({ route }) {
      const pageTitle = pageTitleFn(route)
      return {
        pageTitle,
      }
    },
    data() {
      return {
        pageTitle: '',
      }
    },
    watch: {
      $route(to, from) {
        if (to && to.fullPath && from && from.fullPath) {
          // eslint-disable-next-line
          console.warn('pages/blog/_year.vue watch.$route AAA', {
            'to.fullPath': to.fullPath,
            'from.fullPath': from.fullPath,
          })
          if (to.fullPath !== from.fullPath) {
            const pageTitle = pageTitleFn(to)
            this.pageTitle = pageTitle
          }
        }

        // eslint-disable-next-line
        console.warn('pages/blog/_year.vue watch.$route', { to, from })
      },
    },
    head() {
      const title = this.pageTitle
      const out = {
        title,
      }
      return out
    },
  })
</script>
