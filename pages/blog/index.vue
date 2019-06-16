<template>
  <div class="pages--blog-index">
    <h3>Articles</h3>
    <ul>
      <li><nuxt-link to="/">..</nuxt-link></li>
      <li v-for="item in years" :key="item">
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
import { Vue, Component } from 'nuxt-property-decorator'

import { VueRouterLocationInterface } from '~/lib/runtime'
import { ArticleIndex } from '~/lib/article-index'

import { Post } from '~/lib/models'
import { blogModule } from '~/store/blog/const'

@Component
export default class Index extends Vue {
  @blogModule.State
  private items!: Post[]

  @blogModule.Action('hydrate')
  private hydrate!: () => void

  async mounted() {
    await this.hydrate()
  }

  toLocation(year: number): VueRouterLocationInterface {
    const path: string[] = []
    path.push('blog')
    path.push(String(year))
    const out: VueRouterLocationInterface = {
      path: '/' + path.join('/'),
    }
    return out
  }

  get years(): number[] {
    const index = new ArticleIndex('')
    const items = [...this.items].map(i => i.slug)
    index.setLines(items)
    const out: number[] = index.getYears()
    return out
  }
}
</script>
