<template>
  <section class="pages__blog--parent">
    <div
      class="pages-blog--parent--top justify-items-stretch grid grid-cols-2 gap-4"
    >
      <app-bread-crumb
        v-if="!!$route && $route.params && $route.matched"
        :route="$route"
        class="flex"
      />
      <form
        class="justify-self-end flex items-center justify-center"
        @submit.prevent="submit"
      >
        <label for="search" class="sr-only">Search within blog:</label>
        <input
          id="search"
          v-model="q"
          type="search"
          autocomplete="off"
          name="q"
          placeholder="e.g. linux"
          class="focus:font-bold focus:shadow-outline px-4 py-2 leading-normal border border-gray-300 rounded"
        />
      </form>
    </div>
    <div class="pages-blog--parent--bottom">
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
  export interface Computed {}
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
    watch: {
      q: {
        immediate: true,
        handler() {
          const { query = {} } = this.$route
          const { q = '' } = query
          this.$router
            .replace({ query: q !== '' ? { q } : undefined })
            .catch(() => {})
        },
      },
    },
    beforeMount() {
      const { query = {} } = this.$route
      const { q = '' } = query
      this.q = typeof q === 'string' ? q : ''
    },
    methods: {
      submit() {
        // if you want to send any data into server before redirection then you can do it here
        this.$router.push('/blog?q=' + this.q)
      },
    },
  })
</script>
