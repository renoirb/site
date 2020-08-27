<template>
  <div class="pages-projects--slug">
    <nuxt-link to="/projects">Projects</nuxt-link>
    <h2>{{ article.title }}</h2>
    <nuxt-content :document="article" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    async asyncData({ $content, params, error }) {
      const { slug } = params
      let article

      try {
        article = await $content('projects', slug).fetch()
      } catch (e) {
        error({ message: 'Project not found' })
      }

      return {
        slug,
        article,
      }
    },
  })
</script>
