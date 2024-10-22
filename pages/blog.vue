<template>
  <section class="pages__blog--parent" data-wip="pages/blog.vue">
    <div
      class="pages-blog--parent--top justify-items-stretch sm:grid-cols-2 sm:grid-flow-row md:grid-flow-col-dense grid grid-cols-1 gap-4"
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
    <div class="pages-blog--parent--bottom">
      <nuxt-child />
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  export interface Data {}
  export interface Methods {}
  export interface Computed {
    pageTitle: string
  }
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'app-bread-crumb': () => import('@/components/AppBreadCrumb.vue'),
    },
    computed: {
      pageTitle(): string {
        let pageTitle = 'Blog'
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
