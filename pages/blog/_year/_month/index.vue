<template>
  <div class="pages--blog-_year-_month-index">
    <h3>{{ month }}</h3>
    <ul>
      <li><nuxt-link :to="`/blog/${year}`">..</nuxt-link></li>
      <li v-for="item in subset" :key="item.slug">
        <article-link v-bind="item" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import * as postsStore from '~/store/posts'
const posts = namespace(postsStore.name)

import { Post } from '~/lib/models/store'

import { VueRouterLocationInterface } from '~/lib/runtime'
import { ArticleIndex } from '~/lib/article-index'

@Component({
  components: {
    ArticleLink: () => import('~/components/ArticleLink.vue'),
  },
})
export default class BlogItem extends Vue {
  @posts.State items!: Post[]
  @posts.Action('hydrate') hydrate
  @posts.Getter('selectedMonthAndYear') selectedMonthAndYear
  async mounted() {
    await this.hydrate()
  }

  get subset(): Post[] {
    const year = this.year
    const month = this.month
    return this.selectedMonthAndYear(year, month)
  }

  get month(): number {
    const { month } = this.$route.params
    return +month
  }
  get year(): number {
    const fallbackYear = new Date().getFullYear()
    const { year } = this.$route.params
    return +year
  }
  validate({ params }): boolean {
    return /^\d+$/.test(params.month) && /^\d+$/.test(params.year)
  }
}
</script>
