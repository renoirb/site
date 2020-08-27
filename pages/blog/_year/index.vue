<template>
  <div class="pages-blog-year--index">
    <nuxt-link to="/blog">Blog</nuxt-link>
    <h2>{{ year }}</h2>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <nuxt-link :to="article.path">
          <em>{{ article.date }}</em>
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  watchQuery: true,
  async asyncData ({ $content, params }) {
    const { year } = params

    const articles = await $content('blog', year, { deep: true })
      .sortBy('date', 'desc')
      .fetch()

    return {
      articles,
      year,
    }
  }
})
</script>
