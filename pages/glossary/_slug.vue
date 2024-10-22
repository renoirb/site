<template>
  <div class="pages-glossary--slug">
    <div class="document document--collection">
      <div class="title page-title font-serif text-2xl italic">
        <!-- eslint-disable vue/no-v-html -->
        <h1 v-html="abbreviatize(content.title)" />
      </div>
      <div class="body mt-10">
        <app-image
          v-if="content.coverImage && content.coverImage.src"
          :src="content.coverImage.src"
          :alt="content.coverImage.alt ? content.coverImage.alt : undefined"
          :figcaption="
            abbreviatize(
              content.coverImage.figcaption
                ? content.coverImage.figcaption
                : content.coverImage.document !== null
                ? ' '
                : undefined,
            )
          "
          class="document-cover md:float-right lg:w-1/3 md:pl-5 sm:w-1/2 z-30 float-none pb-5 pl-0 mx-auto mt-1"
        >
          <nuxt-content
            v-if="content.coverImage && content.coverImage.document !== null"
            :document="content.coverImage.document"
          />
        </app-image>
        <nuxt-content :document="content" />
        <div class="clearfix" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  /** eslint-disable @typescript-eslint/no-unused-vars no-unused-vars */
  import Vue from 'vue'
  import {
    INuxtContentResult,
    abbreviatize,
    IAbbreviatize,
    /*                       */
  } from '~/lib'
  export interface Data {
    content: INuxtContentResult
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content, params, error, route }) {
      const { slug } = params
      const { name } = route
      if (typeof name !== 'string') {
        return error({ statusCode: 404, message: `Not Found` })
      }
      const dataModelName = name.replace('-slug', '')
      let content

      try {
        content = await $content(dataModelName, slug).fetch()
      } catch (e) {
        error({ message: 'Term not found' })
      }

      return {
        content,
      }
    },
    methods: {
      abbreviatize,
    },
  })
</script>
