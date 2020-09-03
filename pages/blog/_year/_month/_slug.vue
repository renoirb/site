<template>
  <div class="pages-blog-year-month--slug">
    <very-old-article
      :locale="article.locale || 'en-CA'"
      :date="article.date"
    />
    <div>
      <h2>{{ article.title }}</h2>
      <nuxt-content :document="article" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    async asyncData({ $content, params, error }) {
      const { year, month, slug } = params

      let article

      try {
        article = await $content('blog', year, month, slug).fetch()
      } catch (e) {
        error({ message: 'Article not found' })
      }

      return {
        year,
        month,
        slug,
        article,
      }
    },
  })
</script>
