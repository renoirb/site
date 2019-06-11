<template>
    <section>
      <h3>Articles</h3>
      <ul>
        <li v-for="item in years" :key="item">
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
import { Vue, Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import * as postsStore from '~/store/posts'
const posts = namespace(postsStore.name)

import { Post } from '~/lib/models/store'

import { VueRouterLocationInterface } from '~/lib/runtime'
import { ArticleIndex } from '~/lib/article-index'

@Component
export default class Index extends Vue {
  @posts.State items!: Post[]
  @posts.Action('hydrate') hydrate
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
    const i = [...this.items].map(i => i.slug)
    index.setLines(i)
    const out: number[] = index.getYears()
    return out
  }
}
</script>
