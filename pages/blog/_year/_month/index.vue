<template>
    <section>
      <h3>{{ month }}</h3>
      <ul>
        <li v-for="item in items" :key="item.slug">
            <article-link v-bind="item" />
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

@Component({
  components: {
    ArticleLink: () => import('~/components/ArticleLink.vue'),
  },
})
export default class BlogItem extends Vue {
  @posts.State items!: Post[]
  @posts.Action('hydrate') hydrate
  async mounted() {
    await this.hydrate()
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
