<template>
  <div>
    <h1>Renoir Boulanger’s upcoming site <small>Work in progress</small></h1>
    <ul>
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
      <li><nuxt-link to="/hello">Hello</nuxt-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
  export interface Data {
    baseUrl: string
  }
  export interface Props {}
  export default defineComponent<Props, Data>({
    layout: 'blank',
    asyncData(ctx) {
      const baseUrl = ctx.base
      if (ctx.isDev) {
        return ctx.redirect(307, '/hello')
      }
      return {
        baseUrl,
      }
    },
    // head() {
    //   const to = this.baseUrl.replace(/\/$/, '') + '/hello'
    //   return {
    //     meta: [
    //       { hid: 'http-equiv', name: 'http-equiv', content: `0; URL=${to}` },
    //     ],
    //   }
    // },
  })
</script>
