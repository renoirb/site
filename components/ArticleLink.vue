<template>
    <nuxt-link
      :to="location"
    >
      {{ textContent }}
    </nuxt-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import * as postsStore from '~/store/posts'
const posts = namespace(postsStore.name)

import { Article } from '~/lib/models'

import {
  VueRouterLocationInterface,
  VueRouterPropertyDictionary,
} from '~/lib/runtime/nuxt'

@Component({
  props: {
    article: {
      type: Article,
    },
  },
})
export default class ArticleLink extends Vue {
  base: string = ''
  article!: Article

  @posts.Action('read') getContent

  get location(): VueRouterLocationInterface {
    const pathParts: string[] = []
    if (this.base) {
      pathParts.push(this.base)
    }
    pathParts.push(this.article.path)

    const path: string = '/' + pathParts.join('/')
    const meta: VueRouterPropertyDictionary = {
      slug: this.id,
      title: this.article.title,
    }

    console.log('computed.location', path)

    const out: VueRouterLocationInterface = {
      path,
      meta,
    }

    return out
  }

  get id(): string {
    const { slug = '' } = this.article
    return slug
  }

  get textContent(): string {
    const { title = '', slug = '' } = this.article
    const hasTitle = title !== ''

    return hasTitle ? title : slug
  }

  async beforeMount() {
    const { slug } = this.article
    await this.getContent(this.article)
  }
}
</script>
