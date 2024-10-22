<template>
  <div class="pages__blog__tag--index">
    <div class="document document--collection">
      <div class="title page-title font-serif text-2xl italic">
        <h1>{{ title }}</h1>
      </div>
      <div class="body">
        <ul>
          <li v-for="item in items" :key="item.key">
            <!-- eslint-disable vue/no-v-html vue/no-v-text-v-html-on-component -->
            <NuxtLink
              :to="`/blog/${urlParam}/${item.key}`"
              :title="toTaxonomyHumanLink(item).description"
              v-html="toTaxonomyHumanLink(item).text"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    toTaxonomyHumanLink,
    nuxtPageAsyncDataForTaxonomyIndex,
    /*                       */
  } from '~/lib'
  import type {
    ITaxonomyItem,
    IToTaxonomyHumanLink,
    /*                       */
  } from '~/lib'
  export interface Data {
    items: ITaxonomyItem[]
    title: string
    urlParam: string
  }
  export interface Methods {
    toTaxonomyHumanLink: IToTaxonomyHumanLink
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData(ctx) {
      const data = await nuxtPageAsyncDataForTaxonomyIndex('tags', 'tag', ctx)
      return data
    },
    data() {
      return {
        urlParam: 'tag',
        title: 'All tags',
        items: [],
      }
    },
    methods: {
      toTaxonomyHumanLink,
    },
  })
</script>
