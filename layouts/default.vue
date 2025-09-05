<template>
  <rb-app-layout>
    <div slot="top-left">
      <NuxtLink
        to="/"
        class="text-2xl font-semibold"
        style="color: var(--color-sandwich-text); opacity: 1"
        data-wip="From AppSideBar"
      >
        {{ appTitle }}
      </NuxtLink>
    </div>
    <div slot="top-right" class="container flex items-center justify-between">
      <NuxtLink
        v-for="({ label, to }, index) of nav"
        :key="`${label}--${index}`"
        :to="to"
        class="hover:opacity-100 opacity-80 hover:underline flex items-center p-3 px-4 py-2 mr-2 font-medium text-center rounded"
      >
        {{ label }}
      </NuxtLink>
    </div>
    <main>
      <nuxt />
    </main>
    <app-footer slot="footer-left" v-bind="appIdentity" />
  </rb-app-layout>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    appHeaderNav,
    fromNuxtContextToAppIdentity,
    fromPackageToAppIdentity,
    IAppIdentity,
    pageTitleForBlogIndex,
    fromColorModeToClassName,
    getColorModeClassName,
    /*                       */
  } from '~/lib'
  import type {
    IAppHeaderNavItems,
    /*                       */
  } from '~/lib'
  export interface Data {
    nav: IAppHeaderNavItems[]
    appIdentity: IAppIdentity
    colorModeClassName: string
    pageTitle: string
    isOpen: boolean
  }
  export interface Methods {}
  export interface Computed {
    layoutClassName: string
  }
  export interface Props extends IAppIdentity {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      // @ts-ignore
      'inline-svg': () => import('vue-inline-svg'),
    },
    data() {
      const appIdentityFallback = fromPackageToAppIdentity({} as any)
      const appIdentityPicks = fromNuxtContextToAppIdentity(this.$nuxt.context)
      const colorModeClassName = getColorModeClassName(this.$nuxt.context)
      const appIdentity: IAppIdentity = {
        ...appIdentityFallback,
        ...appIdentityPicks,
      }
      const appTitle = appIdentity?.name || 'Renoir B. - Blog'
      return {
        appTitle,
        nav: appHeaderNav,
        appIdentity,
        colorModeClassName,
        isOpen: false,
        pageTitle: '',
      }
    },
    computed: {
      layoutClassName(): string {
        return 'layout--default'
      },
    },
    watch: {
      $route(to, from) {
        if (to && to.fullPath && from && from.fullPath) {
          const pageTitle = pageTitleForBlogIndex(to)
          if (to.fullPath !== from.fullPath && pageTitle) {
            this.pageTitle = pageTitle
          }
        }
      },
    },
    mounted() {
      const colorModeClassName = fromColorModeToClassName(this?.$colorMode)
      this.colorModeClassName = colorModeClassName
      if (this.$el && this.$el.ownerDocument) {
        const probe = this.$el.ownerDocument as Document
        try {
          probe.body.classList.add('before')
          probe.body.style.transform = 'none'
        } catch (e) {
          // NoOp
        }
      }
      // Remove any iframe[width][height]
      if (this.$el && this.$el.ownerDocument) {
        const iframes: HTMLIFrameElement[] = []
        try {
          const nodes = this.$el.ownerDocument.querySelectorAll('iframe')
          iframes.push(...Array.from(nodes))
        } catch (_) {
          // ...
        }
        iframes.forEach((i) => {
          i.removeAttribute('width')
        })
      }
    },
    methods: {
      onOpen(onOpen: boolean) {
        this.isOpen = onOpen
      },
    },
    head() {
      const colorModeClassName: ReturnType<typeof fromColorModeToClassName> =
        fromColorModeToClassName(this?.$colorMode)
      const layoutClassName = this.layoutClassName
      const htmlAttrs = {
        class: [layoutClassName, 'zone__sandwich', colorModeClassName],
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
