<template>
  <div class="pages--blog-_year-_month-index">
    <h3>{{ year }}-{{ month }}</h3>
    <ul>
      <li>
        <nuxt-link :to="`/${base}/${year}`">..</nuxt-link>
      </li>
      <li
        v-for="(article, index) in articles"
        :key="index"
      >
        <article-link
          :base="base"
          :article="article"
          @route-changed="selectArticle"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import * as postsStore from '~/store/posts'
const posts = namespace(postsStore.name)

import { Article } from '~/lib/models'

import { VueRouterLocationInterface } from '~/lib/runtime'
import { ArticleIndex } from '~/lib/article-index'

@Component({
  components: {
    ArticleLink: () => import('~/components/ArticleLink.vue'),
  },
})
export default class BlogYearMonthPage extends Vue {
  base: string = 'blog'

  @posts.State items!: Article[]
  @posts.Action('hydrate') hydrate
  @posts.Action('select') select
  @posts.Getter('selectedMonthAndYear') selectedMonthAndYear
  async mounted() {
    await this.hydrate()
  }

  get articles(): Article[] {
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

  async selectArticle(foo) {
    // const slug = article.slug
    console.log('selectArticle', foo)
    // await this.select(slug)
  }
}
</script>
