<template>
  <div
    :key="post.title"
    class="pages--blog-_year-_month-_slug-index"
  >
    <nuxt-link :to="up">back</nuxt-link>
    <h3>{{ post.title }}</h3>
    <vue-markdown>
{{ post.content }}
    </vue-markdown>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import {
  Post,
  dateTupleSlugToString,
  DateTupleSlug,
  SlugInterface,
} from '~/lib/models'
import { VueRouterLocationInterface } from '~/lib/runtime'

import { blogModule } from '~/store/blog/const'

const markdown = () => import('vue-markdown')

@Component({
  components: {
    'vue-markdown': markdown,
  },
})
export default class BlogYearMonthDaySlugPage extends Vue {
  base: string = 'blog'

  @blogModule.Action('select')
  private select!: () => void

  @blogModule.Getter('currentlySelected')
  private post!: Post

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

  async beforeRouteLeave() {
    await this.select()
  }

  async beforeRouteEnter(to, _, next) {
    await next(async vm => {
      const params: DateTupleSlug = to.params
      let slug = dateTupleSlugToString(params)
      if (slug) {
        if (/\.md$/i.test(slug) === false) {
          slug += '.md'
        }
        const item: SlugInterface = {
          slug,
        }
        await vm.$store.dispatch('blog/hydrate')
        await vm.$store.dispatch('blog/select', slug)
        await vm.$store.dispatch('blog/load', item)
        // console.log('beforeRouteEnter item', item, vm)
      }
    })
  }
}
</script>
