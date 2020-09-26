<template>
  <div class="pages__index--parent">
    <div class="document document--item z-30">
      <ul>
        <li
          v-for="content in contents"
          :key="content.slug"
          class="mb-8 text-lg"
          :lang="content.locale ? content.locale : 'en-CA'"
        >
          <!-- eslint-disable vue/no-v-html -->
          <NuxtLink
            :to="{
              path: content.path,
              meta: {
                locale: content.locale ? content.locale : 'en-CA',
                date: content.date,
              },
            }"
            class="font-serif italic"
            v-html="abbreviatize(content.title)"
          />
          <div v-if="content.prettyfiedTemporalDate" class="mt-0 mb-5 text-xs">
            <time :datetime="content.prettyfiedTemporalDate.temporalDate">
              {{ content.prettyfiedTemporalDate.prettified }}
            </time>
          </div>
          <app-article-tags
            :link="false"
            :content="content"
            class="mt-0 mb-4"
          />
        </li>
      </ul>
    </div>
    <NuxtLink class="sr-only" to="/kitchen-sink">Kitchen sink</NuxtLink>
    <NuxtLink class="sr-only" to="/styleguide">styleguide</NuxtLink>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    INuxtContentResult,
    getPrettyfiedTemporalDate,
    IPrettyfiedTemporalDate,
    abbreviatize,
    IAbbreviatize,
  } from '~/lib'
  export interface IDatedNuxtContentResult extends INuxtContentResult {
    prettyfiedTemporalDate: IPrettyfiedTemporalDate
  }
  export interface Data {
    contents: IDatedNuxtContentResult[]
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    layout: 'homepage',
    async asyncData({ $content }) {
      const tag = 'Favourites'

      let contents: IDatedNuxtContentResult[] = []
      contents = await $content('blog', { deep: true })
        .where({ tags: { $contains: tag } })
        .sortBy('createdAt', 'desc')
        .fetch()

      for (const content of contents) {
        const prettyfiedTemporalDate = getPrettyfiedTemporalDate(
          content,
          content.locale,
        )
        content.prettyfiedTemporalDate = prettyfiedTemporalDate
      }

      return {
        contents,
      }
    },
    methods: {
      abbreviatize,
    },
  })
</script>
