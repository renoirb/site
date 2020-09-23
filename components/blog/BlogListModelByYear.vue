<template>
  <div class="blog-list-model-by-year">
    <div v-for="inThatYear in byYears" :key="`buckets-year-${inThatYear[0]}`">
      <nuxt-link
        :to="{
          path: `/blog/${inThatYear[0]}`,
          query: { q: q ? q : undefined },
        }"
      >
        <h2 class="my-4 font-serif text-2xl italic">{{ inThatYear[0] }}</h2>
      </nuxt-link>
      <ul>
        <li v-for="content in inThatYear[1]" :key="content.slug" class="mb-8">
          <!-- eslint-disable vue/no-v-html -->
          <nuxt-link
            :lang="content.locale ? content.locale : 'en-CA'"
            :to="{
              path: content.path,
              meta: {
                locale: content.locale ? content.locale : 'en-CA',
                date: content.date,
              },
            }"
            class="font-serif text-lg italic"
            v-html="abbreviatize(content.title)"
          />
          <div
            v-if="content.prettyfiedTemporalDate"
            class="mt-0 mb-5 font-serif text-sm italic"
          >
            <time :datetime="content.prettyfiedTemporalDate.temporalDate">
              {{ content.prettyfiedTemporalDate.prettified }}
            </time>
          </div>
          <app-article-tags
            :link="false"
            :content="content"
            class="mt-2 mb-4"
          />
        </li>
      </ul>
      <div class="h-5 -ml-10" style="background-color: var(--bg)" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    INuxtContentResult,
    breakIntoYears,
    abbreviatize,
    IAbbreviatize,
    INuxtContentIndexResultByYears,
  } from '~/lib'
  export interface Data {}
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {
    byYears: INuxtContentIndexResultByYears
  }
  export interface Props {
    contents: INuxtContentResult[]
    q: string
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'BlogListModelByYear' /* blog-list-model-by-year */,
    props: {
      contents: {
        type: Array,
        default: () => [],
      },
      q: {
        type: String,
        default: '',
      },
    },
    computed: {
      byYears(): INuxtContentIndexResultByYears {
        return breakIntoYears(this.contents)
      },
    },
    methods: {
      abbreviatize,
    },
  })
</script>
