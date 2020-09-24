<template>
  <div class="layouts--default">
    <app-header class="top" />
    <main class="zone__sandwich__meat middle container mx-auto">
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
  import { fromProcessEnvToAppIdentity, IAppIdentity } from '~/lib'
  export interface Data {
    appIdentity: IAppIdentity
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props extends IAppIdentity {}
  export default Vue.extend<Data, Methods, Computed, Props>({
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
    mounted() {
      if (this.$el && this.$el.ownerDocument) {
        const probe = this.$el.ownerDocument as HTMLDocument
        try {
          probe.body.classList.add('before')
          probe.body.style.transform = 'none'
          // eslint-disable-next-line
          console.log('layouts/default mounted try', probe.body.style.transform)
        } catch (e) {
          // eslint-disable-next-line
          console.log('layouts/default mounted catch', e)
        }
        // eslint-disable-next-line
        console.log('what-gets-executed-2: layouts/default mounted', { probe })
        // this.$el.style.transform = 'none'
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
