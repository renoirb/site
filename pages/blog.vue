<template>
  <section class="pages__blog--parent">
    <div class="pages-blog--parent--top">
      <app-bread-crumb :route="$route" />
      <form @submit.prevent="submit()">
        <label for="search">blog:</label>
        <input
          id="search"
          v-model="q"
          name="q"
          placeholder="e.g. linux"
          class="focus:outline-none focus:shadow-outline px-4 py-2 leading-normal border border-gray-300 rounded"
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
  import AppBreadCrumb from '@/components/AppBreadCrumb.vue'
  export interface Data {
    q: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'app-bread-crumb': AppBreadCrumb,
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
          const q = this.$route.query.q || ''
          this.$router
            .replace({ query: q !== '' ? { q } : undefined })
            .catch(() => {})
        },
      },
    },
    beforeMount() {
      const q = this.$route.query.q || ''
      this.q = q
    },
    methods: {
      submit() {
        // if you want to send any data into server before redirection then you can do it here
        this.$router.push('/blog?q=' + this.q)
      },
    },
  })
</script>
