<template>
  <div
    class="pages--blog-_year-_month-index"
    v-if="!$route.params.slug"
  >
    <h3>{{ pageTitle }}</h3>
    <ul>
      <li>
        <nuxt-link :to="up">..</nuxt-link>
      </li>
      <li
        v-for="(article, index) in articles"
        :key="index"
      >
        <article-link
          :base="base"
          :value="article"
          @article-select="selectHandler"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import { VueRouterLocationInterface } from '~/lib/runtime'
import { ArticleIndex } from '~/lib/article-index'

import { Post } from '~/lib/models'
import { blogModule } from '~/store/blog/const'

@Component({
  components: {
    ArticleLink: () => import('~/components/ArticleLink.vue'),
  },
})
export default class BlogYearMonthPage extends Vue {
  base: string = 'blog'

  @blogModule.State
  private items!: Post[]

  @blogModule.Action('hydrate')
  private hydrate!: () => void

  @blogModule.Action('select')
  private select!: (slug: string) => void

  @blogModule.Getter('selectedMonthAndYear')
  private selectedMonthAndYear!: (year: number, month: number) => Post[]

  get articles(): Post[] {
    const year = this.year
    const month = this.month
    return this.selectedMonthAndYear(year, month)
  }

  get month(): number {
    const fallback = new Date().getMonth()
    const { params = {} } = this.$route
    const { month = String(fallback) } = params
    return +month
  }

  get year(): number {
    const fallback = new Date().getFullYear()
    const { params = {} } = this.$route
    const { year = String(fallback) } = params
    return +year
  }

  get pageTitle(): string {
    return this.$route.fullPath
  }

  get up(): VueRouterLocationInterface {
    const path: string[] = []
    path.push('blog')
    const { params = {} } = this.$route
    const { month, year } = params
    path.push(String(year))
    path.push(String(month).padStart(2, '0'))
    const out: VueRouterLocationInterface = {
      path: '/' + path.join('/'),
    }
    return out
  }

  async mounted() {
    await this.hydrate()
  }

  async selectHandler(a) {
    console.log('selectHandler', a)
  }

  validate({ params }): boolean {
    return /^\d+$/.test(params.month) && /^\d+$/.test(params.year)
  }
}
</script>
