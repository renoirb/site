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
import { Vue, Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import * as postsStore from '~/store/posts'
const posts = namespace(postsStore.name)

import { Article } from '~/lib/models'

import { VueRouterLocationInterface } from '~/lib/runtime'
import { ArticleIndex } from '~/lib/article-index'

@Component
export default class BlogYearPage extends Vue {
  @posts.State items!: Article[]
  @posts.Action('hydrate') hydrate
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
    const fallbackYear = new Date().getFullYear()
    const { year = String(fallbackYear) } = this.$route.params
    return +year
  }
  get months(): number[] {
    const year = this.year
    const index = new ArticleIndex('')
    const i = [...this.items].map(i => i.slug)
    index.setLines(i)
    const out: number[] = index.getMonthsFor(year)
    return out
  }
  validate({ params }): boolean {
    return /^\d+$/.test(params.year)
  }
}
</script>
