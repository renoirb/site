<template>
  <section class="pages__glossary--parent">
    <div
      class="pages-glossary--parent--top justify-items-stretch sm:grid-cols-2 sm:grid-flow-row md:grid-flow-col-dense grid grid-cols-1 gap-4"
    >
      <app-bread-crumb
        v-if="!!$route && $route.params && $route.matched"
        :route="$route"
      />
    </div>
    <div
      v-if="
        !(
          $route &&
          $route.params &&
          ($route.params.slug || $route.params.tag || $route.params.category)
        )
      "
      class="title page-title mb-4 font-serif text-2xl italic"
    >
      <h1>{{ pageTitle }}</h1>
    </div>
    <div class="pages-glossary--parent--bottom">
      <nuxt-child :q="q" />
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  export interface Data {
    q: string
  }
  export interface Methods {}
  export interface Computed {
    pageTitle: string
  }
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'app-bread-crumb': () => import('@/components/AppBreadCrumb.vue'),
    },
    data() {
      return {
        q: '',
      }
    },
    computed: {
      pageTitle(): string {
        const pageTitle = 'Glossary'
        return pageTitle
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
