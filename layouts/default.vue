<template>
  <div :class="{ 'layouts--default': true, 'is-side-bar-open': isOpen }">
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
    <app-header class="top z-50" @side-bar-open="onOpen($event)" />
    <div v-show="isOpen" class="fixed inset-0 z-40 transition-opacity">
      <div class="absolute inset-0 bg-black opacity-75"></div>
    </div>
    <main class="zone__sandwich__meat middle container z-40 mx-auto">
      <div class="md:m-10 grid grid-cols-1 m-5" data-wip="layout/default.vue">
        <nuxt />
      </div>
    </main>
    <app-footer v-bind="appIdentity" class="bottom" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    fromNuxtContextToAppIdentity,
    fromProcessEnvToAppIdentity,
    IAppIdentity,
    pageTitleForBlogIndex,
    getColorModeClassName,
  } from '~/lib'
  export interface Data {
    appIdentity: IAppIdentity
    colorModeClassName: string
    pageTitle: string
    isOpen: boolean
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
      const appIdentityPicks = fromNuxtContextToAppIdentity(this.$nuxt.context)
      const colorModeClassName = getColorModeClassName(this.$nuxt.context)
      const appIdentity: IAppIdentity = {
        ...appIdentityFallback,
        ...appIdentityPicks,
      }
      return {
        appIdentity,
        colorModeClassName,
        isOpen: false,
        pageTitle: '',
      }
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
      const colorModeClassName = getColorModeClassName(this.$nuxt.context)
      this.colorModeClassName = colorModeClassName
      if (this.$el && this.$el.ownerDocument) {
        const probe = this.$el.ownerDocument as HTMLDocument
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
