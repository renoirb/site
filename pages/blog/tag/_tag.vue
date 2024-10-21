<template>
  <div class="pages__blog__tag--item">
    <div class="document document--collection">
      <div class="title page-title font-serif italic">
        <h1 class="text-2xl">
          <!-- eslint-disable vue/no-v-html -->
          <em
            v-if="taxonomyHumanText"
            :data-route-params-taxonomy-key="$route.params[taxonomyKey]"
            :data-taxonomy-key="taxonomyKey"
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
      <div
        class="body"
        :data-count="contents.length"
      >
        <blog-list-model-by-year
          :contents="contents"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import BlogListModelByYear from '@/components/blog/BlogListModelByYear.vue'
  import {
    abbreviatize,
    nuxtPageAsyncDataForTaxonomyList,
    /*                       */
  } from '~/lib'
  import type {
    INuxtContentResult,
    IAbbreviatize,
    ITaxonomyItem,
    /*                       */
  } from '~/lib'
  export interface Data {
    urlParam: string
    contents: INuxtContentResult[]
    taxonomyKey: string
    taxonomy: ITaxonomyItem
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {
    taxonomyHumanText: string | false
    taxonomyHumanDescription: string | false
  }
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'blog-list-model-by-year': BlogListModelByYear,
    },
    async asyncData(ctx) {
      return await nuxtPageAsyncDataForTaxonomyList('tags', 'tag', ctx)
    },
    data() {
      return {
        contents: [],
        urlParam: 'tag',
        taxonomyKey: '',
        taxonomy: { key: '', text: '' } as ITaxonomyItem,
      }
    },
    computed: {
      taxonomyHumanText(): string | false {
        let out: string | false = false
        const urlParam = this.urlParam
        if (urlParam && urlParam in this.$route.params) {
          out = this.$route.params[urlParam]
          if (
            this.taxonomy &&
            this.taxonomy.human &&
            this.taxonomy.human.text
          ) {
            out = this.taxonomy.human.text
          }
        }
        return out
      },
      taxonomyHumanDescription(): string | false {
        let out: string | false = false
        if (
          this.taxonomy &&
          this.taxonomy.human &&
          this.taxonomy.human.description
        ) {
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
