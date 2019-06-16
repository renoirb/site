<template>
  <div class="pages--blog-_year-index">
    <h3>{{ year }}</h3>
    <ul>
      <li><nuxt-link :to="`/blog`">..</nuxt-link></li>
      <li v-for="item in months" :key="item">
        <nuxt-link
          :to="toLocation(item)"
        >
          {{ item }}
        </nuxt-link>
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

@Component({})
export default class BlogYearPage extends Vue {
  @blogModule.State
  private items!: Post[]

  @blogModule.Action('hydrate')
  private hydrate!: () => void

  async mounted() {
    await this.hydrate()
  }

  toLocation(month: number): VueRouterLocationInterface {
    const path: string[] = []
    path.push('blog')
    const year = this.year
    path.push(String(year))
    path.push(String(month).padStart(2, '0'))
    const out: VueRouterLocationInterface = {
      path: '/' + path.join('/'),
    }
    return out
  }

  get year(): number {
    const fallback = new Date().getFullYear()
    const { params = {} } = this.$route
    const { year = String(fallback) } = params
    return +year
  }

  get months(): number[] {
    const year = this.year
    const index = new ArticleIndex('')
    const items = [...this.items].map(i => i.slug)
    index.setLines(items)
    const out: number[] = index.getMonthsFor(year)
    return out
  }

  validate({ params }): boolean {
    return /^\d+$/.test(params.year)
  }
}
</script>
