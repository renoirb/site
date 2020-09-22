<template>
  <div class="pages__index--parent">
    <div class="document document--item">
      <ul>
        <li
          v-for="content in contents"
          :key="content.slug"
          class="mb-8 text-lg"
          :lang="content.locale ? content.locale : 'en-CA'"
        >
          <nuxt-link
            :to="{
              path: content.path,
              meta: {
                locale: content.locale ? content.locale : 'en-CA',
                date: content.date,
              },
            }"
            class="font-serif italic"
          >
            {{ content.title }}
          </nuxt-link>
          <div
            v-if="content.prettifiedDate.temporalDate"
            class="mt-0 mb-5 text-xs"
          >
            <time :datetime="content.prettifiedDate.temporalDate">
              {{ content.prettifiedDate.formatted }}
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
    <nuxt-link class="sr-only" to="/kitchen-sink">Kitchen sink</nuxt-link>
    <nuxt-link class="sr-only" to="/styleguide">styleguide</nuxt-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    INuxtContentResult,
    getPrettyfiedTemporalDate,
    IPrettyfiedTemporalDate,
  } from '~/lib'
  export interface IDatedNuxtContentResult extends INuxtContentResult {
    prettifiedDate: IPrettyfiedTemporalDate
  }
  export interface Data {
    contents: IDatedNuxtContentResult[]
  }
  export interface Methods {}
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
        const prettifiedDate = getPrettyfiedTemporalDate(
          content,
          content.locale,
        )
        content.prettifiedDate = prettifiedDate
      }

      return {
        contents,
      }
    },
  })
</script>
