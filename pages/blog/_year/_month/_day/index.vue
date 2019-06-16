<template>
  <!--
  * Nuxt Nested Routes:
  * Basically a way to make pages in folder of same name to be sub-pages.
  * https://nuxtjs.org/guide/routing#nested-routes
  -->
  <section>
    <h1>{{ $route.params.day }}</h1>
    <nuxt-child :key="$route.params.slug" />
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

import { VueRouterLocationInterface } from '~/lib/runtime'
import { blogModule } from '~/store/blog/const'

@Component
export default class BlogYearMonthDayPage extends Vue {
  base: string = 'blog'

  @blogModule.Action('hydrate')
  private hydrate!: () => void

  get slug(): string | null {
    const { params = {} } = this.$route
    const { slug } = params
    return !!slug ? slug : null
  }

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

  async beforeMount() {
    const slug = this.slug
    if (!slug) {
      const { path } = this.up
      await this.$router.push({ path })
    }
  }
}
</script>
