<template>
  <div class="pages-blog-year-month--index">
    <nuxt-link to="/blog">Blog</nuxt-link>
    <h2>{{ year }}/{{ month }}</h2>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <nuxt-link :to="article.path">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    watchQuery: true,
    async asyncData({ $content, params }) {
      const { year, month } = params

      const articles = await $content('blog', year, month, { deep: true })
        .sortBy('date', 'desc')
        .fetch()

      return {
        articles,
        year,
        month,
      }
    },
  })
</script>
