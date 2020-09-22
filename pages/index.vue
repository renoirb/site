<template>
  <div class="pages__index--parent">
    <div class="container mx-auto">
      <ul>
        <li
          v-for="content in contents"
          :key="content.slug"
          class="mb-8 text-lg"
        >
          <nuxt-link
            :lang="content.locale ? content.locale : 'en-CA'"
            :to="{
              path: content.path,
              meta: {
                locale: content.locale ? content.locale : 'en-CA',
                date: content.date,
              },
            }"
          >
            {{ content.title }}
          </nuxt-link>
          <div v-if="temporalDate" class="mt-0 mb-5 font-serif text-sm italic">
            <time :datetime="temporalDate">
              {{ publishedAtString }}
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
    <ul class="mt-20">
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
      <li><nuxt-link to="/hello">Hello</nuxt-link></li>
      <li><nuxt-link to="/ligne-editoriale">Ligne éditoriale</nuxt-link></li>
      <li><nuxt-link to="/about">About me</nuxt-link></li>
      <li>
        <nuxt-link to="/projets">
          Projets (permalink legacy to migrate from in french)
        </nuxt-link>
      </li>
      <li><nuxt-link to="/styleguide">styleguide</nuxt-link></li>
    </ul>
    <nuxt-link class="sr-only" to="/kitchen-sink">Kitchen sink</nuxt-link>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    contents: INuxtContentResult
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    layout: 'homepage',
    async asyncData({ $content }) {
      const tag = 'Favourites'
      let contents: INuxtContentResult[] = []
      contents = await $content('blog', { deep: true })
        .where({ tags: { $contains: tag } })
        .sortBy('createdAt', 'desc')
        .fetch()

      return {
        contents,
      }
    },
  })
</script>
