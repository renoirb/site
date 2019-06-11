<template>
    <nuxt-link :to="location">{{ textContent }}</nuxt-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { VueRouterLocationInterface } from '~/lib/runtime'

// tslint:disable-next-line: variable-name
const ArticleLink = Vue.extend({
  props: {
    base: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    location(): VueRouterLocationInterface {
      const path: string[] = []
      if (this.base) {
        path.push(this.base)
      }
      path.push(this.path)

      const out: VueRouterLocationInterface = {
        path: '/' + path.join('/'),
      }

      return out
    },
    textContent(): string {
      const title = this.title
      const hasTitle = title !== ''

      return hasTitle ? title : this.slug
    },
  },
})
/*
class ArticleLink extends Vue {
  @Prop(String) readonly basePath: string = ''
  @Prop(String) readonly path: string = ''
  @Prop(String) readonly slug: string = ''

  get location(): VueRouterLocationInterface {
    const path = []
    path.push(this.basePath)

    const out: VueRouterLocationInterface = {
      path: path.join('/'),
    }

    return out
  }
}
*/

export default ArticleLink
</script>
