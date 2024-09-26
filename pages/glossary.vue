<template>
  <section>
    <div
      class="justify-items-stretch sm:grid-cols-2 sm:grid-flow-row md:grid-flow-col-dense grid grid-cols-1 gap-4"
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
      <h1>{{ title }}</h1>
    </div>
    <div>
      <nuxt-child />
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { createVueMetaInfo } from '~/lib'
  export interface Data {
    title: string
    contentFirstDirName: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'app-bread-crumb': () => import('@/components/AppBreadCrumb.vue'),
    },
    asyncData({ error, route }) {
      const { name } = route
      if (typeof name !== 'string') {
        return error({ statusCode: 404, message: `Not Found` })
      }
      const contentFirstDirName = name.replace('-slug', '')
      const title =
        contentFirstDirName.charAt(0).toUpperCase() +
        contentFirstDirName.slice(1)

      const out = {
        title,
        contentFirstDirName,
      }
      return out
    },
    head() {
      const title = this.title
      const out = createVueMetaInfo({ title })
      return out
    },
  })
</script>
