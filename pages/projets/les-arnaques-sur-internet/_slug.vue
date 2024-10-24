<template>
  <div class="pages-projects--slug">
    <div class="document document--collection">
      <div class="title page-title font-serif text-2xl italic">
        <!-- eslint-disable vue/no-v-html -->
        <h1 v-html="abbreviatize(document.title)" />
      </div>
      <time :datetime="document.prettyfiedTemporalDate.temporalDate">
        {{ document.prettyfiedTemporalDate.prettified }}
      </time>
      <div class="body mt-10">
        <nuxt-content :document="document" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  /** eslint-disable @typescript-eslint/no-unused-vars no-unused-vars */
  import Vue from 'vue'
  import {
    abbreviatize,
    getPrettyfiedTemporalDate,
    /*                       */
  } from '~/lib'
  import type {
    IAbbreviatize,
    INuxtContentResult,
    /*                       */
  } from '~/lib'
  export interface Data {
    document: INuxtContentResult
    pageLocale: string
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params, error }) {
      const pageLocale = 'fr-CA'
      const subFolder = 'les-arnaques-sur-internet'

      const { slug } = params
      let document: INuxtContentResult | null = null

      const query = $content('projets', subFolder, slug, {
        deep: true,
      })
      try {
        document = (await query.fetch()) as INuxtContentResult
      } catch (e) {
        error({ message: 'Project not found' })
      }

      if (document) {
        const prettyfiedTemporalDate = getPrettyfiedTemporalDate(
          document,
          document.locale,
        )
        Reflect.set(document, 'prettyfiedTemporalDate', prettyfiedTemporalDate)
      }

      return {
        document,
        pageLocale,
      }
    },
    methods: {
      abbreviatize,
    },
    head() {
      const { locale = 'en-CA', title } = this.document

      const htmlAttrs = {
        lang: locale,
      }

      const out = {
        htmlAttrs,
        title,
      }
      return out
    },
  })
</script>
