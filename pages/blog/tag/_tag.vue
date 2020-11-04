<template>
  <div class="pages__blog__tag--item">
    <div class="document document--collection">
      <div class="title page-title font-serif italic">
        <h1 class="text-2xl">
          <!-- eslint-disable vue/no-v-html -->
          <em
            :data-route-params-tag="$route.params.tag"
            v-html="abbreviatize(taxonomyHumanText)"
          />
        </h1>
        <!-- eslint-disable vue/no-v-html -->
        <p
          v-if="taxonomyHumanDescription"
          class="text-sm"
          v-html="abbreviatize(taxonomyHumanDescription)"
        />
      </div>
      <div class="body">
        <blog-list-model-by-year
          :contents="contents"
          :q="$route && $route.query && $route.query.q"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import BlogListModelByYear from '@/components/blog/BlogListModelByYear.vue'
  import {
    INuxtContentResult,
    abbreviatize,
    IAbbreviatize,
    ITaxonomyHuman,
    queryNuxtContentForTags,
    ITaxonomyItem,
    toTaxonomyItemCollection,
    hydrateTaxonomyCollection,
  } from '~/lib'
  export interface Data {
    contents: INuxtContentResult
    tag: string
    taxonomy: ITaxonomyItem
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {
    taxonomyHumanText: string
    taxonomyHumanDescription: string | false
  }
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'blog-list-model-by-year': BlogListModelByYear,
    },
    async asyncData({ $content, params }) {
      const { tag } = params
      const tagsSet = new Set<string>([tag])
      const locale = 'fr-CA'
      const human: ITaxonomyHuman[] = []
      const humanData = await queryNuxtContentForTags($content, locale)
      if (humanData) {
        human.push(...humanData)
      }
      const items = toTaxonomyItemCollection(tagsSet)
      const tags: ITaxonomyItem[] = hydrateTaxonomyCollection(items, human)
      const taxonomy = tags[0]

      // We are certain that the taxonomy.key is normalized, we should do the same from
      // when taking the source front matter tags, normalize them the same way as we do here
      const $contains = taxonomy.key

      /**
       * Figuring out how to list when has tag string
       * with same text content, case-insensITiVe.
       *
       * Bookmarks:
       * - https://github.com/nuxt/content/issues/577#
       * - https://github.com/techfort/LokiJS/wiki/Query-Examples#find-queries
       */
      const predicate = {
        tags: { $contains },
      } as any
      let contents: INuxtContentResult[] = []
      const maybe: INuxtContentResult[] = await $content('blog', {
        deep: true,
      })
        .where(predicate)
        .sortBy('createdAt', 'desc')
        .fetch()

      contents = Array.isArray(maybe) ? maybe : ([] as INuxtContentResult[])
      return {
        contents,
        tag,
        taxonomy,
      }
    },
    computed: {
      taxonomyHumanText(): string {
        let out: string = this.$route.params.tag
        if (this.taxonomy.human && this.taxonomy.human.text) {
          out = this.taxonomy.human.text
        }
        return out
      },
      taxonomyHumanDescription(): string | false {
        let out: string | false = false
        if (this.taxonomy.human && this.taxonomy.human.description) {
          out = this.taxonomy.human.description
        }
        return out
      },
    },
    methods: {
      abbreviatize,
    },
  })
</script>
