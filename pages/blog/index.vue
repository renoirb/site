<template>
  <div class="pages-blog--index">
    <nuxt-link to="/">Home</nuxt-link>
    <input id="search" v-model="q" placeholder="Search..." />
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
  async asyncData ({ $content, route }) {
    const q = route.query.q
    let query = $content('blog', { deep: true })
      .sortBy('date', 'desc')
    if (q) {
      query = query.search(q)
      // OR query = query.search('title', q)
    }
    const articles = await query.fetch()
    return {
      q,
      articles,
    }
  },
  watch: {
    q () {
      this.$router.replace({ query: this.q ? { q: this.q } : undefined }).catch(() => { })
    }
  }
})
</script>
