<template>
    <section>
      <h3>{{ year }}</h3>
      <ul>
        <li v-for="item in months" :key="item">
          <nuxt-link
            :to="toLocation(item)"
          >
            {{ item }}
          </nuxt-link>
        </li>
      </ul>
    </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import * as postsStore from '~/store/posts'
const posts = namespace(postsStore.name)

import { Post } from '~/lib/models/store'

import { VueRouterLocationInterface } from '~/lib/runtime'
import { ArticleIndex } from '~/lib/article-index'

@Component
export default class BlogItem extends Vue {
  @posts.State items!: Post[]
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
    const out: number[] = index.getMontsFor(year)
    return out
  }
  validate({ params }): boolean {
    return /^\d+$/.test(params.year)
  }
}
</script>
