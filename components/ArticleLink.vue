<template>
  <nuxt-link
    @click.native="clickHandler"
    :to="location"
    :slug="value.slug"
    v-bind="value"
  >
    {{ textContent }}
  </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import {
  VueRouterLocationInterface,
  VueRouterPropertyDictionary,
} from '~/lib/runtime/nuxt'

import { Post, Article } from '~/lib/models'
import { blogModule } from '~/store/blog/const'

@Component({
  props: {
    value: {
      type: [Post, Article],
    },
  },
})
export default class ArticleLink extends Vue {
  base: string = ''

  @Prop({ type: Object })
  value!: Post | Article

  @blogModule.Action('load')
  private getContent!: (value: Post | Article) => void

  @blogModule.Action('select')
  private select!: (slug: string) => void

  get location(): VueRouterLocationInterface {
    const pathParts: string[] = []
    if (this.base) {
      pathParts.push(this.base)
    }
    pathParts.push(this.value.path)

    const path: string = '/' + pathParts.join('/')
    const meta: VueRouterPropertyDictionary = {
      slug: this.value.slug,
      title: this.value.title,
    }

    // console.log('computed.location', { path, value: { ...this.value } })

    const out: VueRouterLocationInterface = {
      path,
      meta,
    }

    return out
  }

  get textContent(): string {
    const { title = '', slug = '' } = this.value
    const hasTitle = title !== ''

    return hasTitle ? title : slug
  }

  async beforeMount() {
    const { slug } = this.value
    await this.getContent(this.value)
  }

  async clickHandler(click: MouseEvent) {
    const { slug = '' } = this.value
    // console.log(`clickHandler will $emit("article-select", "${slug}")`, click)
    this.$emit('article-select', slug)
    await this.select(slug)
  }
}
</script>
