<template>
  <div class="layouts--default">
    <inline-svg
      :src="require('~/assets/images/2235845.svg')"
      width="1200"
      height="1200"
      style="
        fill: var(--color-sandwich-left-splat-bg) !important;
        position: fixed;
        left: -580px;
        z-index: -2;
        top: 1%;
        margin-top: -300px;
      "
      class="lg:visible z-10 invisible"
    ></inline-svg>
    <app-header class="top" />
    <main class="zone__sandwich__meat middle container z-40 mx-auto">
      <div class="grid">
        <div class="m-10 mt-5">
          <nuxt />
        </div>
      </div>
    </main>
    <app-footer v-bind="appIdentity" class="bottom" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    fromProcessEnvToAppIdentity,
    IAppIdentity,
    pageTitleForBlogIndex,
  } from '~/lib'
  export interface Data {
    appIdentity: IAppIdentity
    colorModeClassName: string
    pageTitle: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props extends IAppIdentity {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      // @ts-ignore
      'inline-svg': () => import('vue-inline-svg'),
    },
    data() {
      const appIdentityFallback = fromProcessEnvToAppIdentity({} as any)
      const { context = {} } = this.$root as any
      const appIdentity = {
        ...appIdentityFallback,
        ...(context.env || {}),
      }
      return {
        appIdentity,
        colorModeClassName: 'light-mode',
        pageTitle: '',
      }
    },
    watch: {
      $route(to, from) {
        if (to && to.fullPath && from && from.fullPath) {
          // eslint-disable-next-line
          console.debug(
            'what-gets-executed-8: layouts/default.vue watch.$route AAA',
            {
              'to.fullPath': to.fullPath,
              'from.fullPath': from.fullPath,
              '$colorMode.value': this.$colorMode.value,
            },
          )
          const pageTitle = pageTitleForBlogIndex(to)
          if (to.fullPath !== from.fullPath && pageTitle) {
            this.pageTitle = pageTitle
          }
        }
      },
    },
    mounted() {
      const { $colorMode = {} } = this.app || {}
      this.colorModeClassName = `${
        $colorMode.value ? $colorMode.value : 'light'
      }-mode`
      // eslint-disable-next-line
      console.debug('what-gets-executed-8: 0 layouts/default mounted', {
        colorModeClassName: this.colorModeClassName,
      })
      if (this.$el && this.$el.ownerDocument) {
        const probe = this.$el.ownerDocument as HTMLDocument
        try {
          probe.body.classList.add('before')
          probe.body.style.transform = 'none'
          // eslint-disable-next-line
          console.debug(
            'what-gets-executed-8: 1 layouts/default mounted try',
            probe.body.style.transform,
          )
        } catch (e) {
          // eslint-disable-next-line
          console.debug(
            'what-gets-executed-8: 2 layouts/default mounted catch',
            e,
          )
        }
        // eslint-disable-next-line
        console.debug('what-gets-executed-8: 3 layouts/default mounted', {
          probe,
        })
        // this.$el.style.transform = 'none'
      }
    },
    head() {
      const colorModeClassName = this.colorModeClassName
      // https://vue-meta.nuxtjs.org/api/#htmlattrs
      const htmlAttrs = {
        class: ['layout--default', 'zone__sandwich', colorModeClassName],
      }
      const title = this.pageTitle
      const out = {
        htmlAttrs,
        title,
      }
      return out
    },
  })
</script>
