<template>
  <div class="pages__blog__tag--index">
    <div class="document document--collection">
      <div class="title page-title font-serif text-2xl italic">
        <h1>All tags</h1>
      </div>
      <div class="body">
        <ul>
          <li v-for="tag in tags" :key="tag.key">
            <NuxtLink
              :to="`/blog/tag/${tag.key}`"
              :title="taxonomyHuman(tag).description"
            >
              {{ taxonomyHuman(tag).text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    INuxtContentResult,
    queryNuxtContentForTags,
    toTaxonomyItemCollection,
    hydrateTaxonomyCollection,
    ITaxonomyItem,
    ITaxonomyHuman,
  } from '~/lib'
  export interface ITaxonomyHumanLink extends Partial<ITaxonomyHuman> {
    text: string
  }
  export interface Data {
    tags: ITaxonomyItem[]
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  const tagsSet = new Set<string>()
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content }) {
      const locale = 'fr-CA'
      const human: ITaxonomyHuman[] = []
      const humanData = await queryNuxtContentForTags($content, locale)
      if (humanData) {
        human.push(...humanData)
      }

      let contents: INuxtContentResult[] = []
      contents = await $content('blog', { deep: true })
        .sortBy('createdAt', 'desc')
        .only('tags')
        .fetch()

      for (const content of contents) {
        if ('tags' in content && Array.isArray(content.tags)) {
          for (const tag of content.tags) {
            tagsSet.add(tag)
          }
        }
      }
      const items = toTaxonomyItemCollection(tagsSet)
      const tags: ITaxonomyItem[] = hydrateTaxonomyCollection(items, human)
      return {
        tags,
      }
    },
    methods: {
      taxonomyHuman(taxonomy: ITaxonomyItem): ITaxonomyHumanLink {
        const out: ITaxonomyHumanLink = {
          key: taxonomy.key,
          text: taxonomy.key,
        }
        if (taxonomy.human) {
          if (taxonomy.human.text) {
            out.text = taxonomy.human.text
          }
          if (taxonomy.human.description) {
            out.description = taxonomy.human.description
          }
        }
        return out
      },
    },
  })
</script>
