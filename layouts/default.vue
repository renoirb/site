<template>
  <div class="layouts--default">
    <app-header class="top" />
    <main class="zone__sandwich__meat middle container mx-auto">
      <inline-svg
        :src="require('~/assets/images/42357.svg')"
        width="150"
        height="150"
        style="margin-top: -120px; fill: var(--color-sandwich-bg) !important"
        class="inline-block clearfix ml-10"
      ></inline-svg>
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
  // @ts-ignore
  import InlineSvg from 'vue-inline-svg'
  import { fromProcessEnvToAppIdentity, IAppIdentity } from '~/lib'
  export interface Data {
    appIdentity: IAppIdentity
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props extends IAppIdentity {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      InlineSvg,
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
      }
    },
    head() {
      // https://vue-meta.nuxtjs.org/api/#htmlattrs
      const htmlAttrs = {
        class: ['layout--default', 'zone__sandwich'],
      }

      const out = {
        htmlAttrs,
      }
      return out
    },
  })
</script>
