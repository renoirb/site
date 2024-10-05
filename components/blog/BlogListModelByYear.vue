<template>
  <div class="blog-list-model-by-year">
    <div v-for="inThatYear in byYears" :key="`buckets-year-${inThatYear[0]}`">
      <NuxtLink
        v-if="showYear"
        class="no-underline"
        :to="{
          path: `/blog/${inThatYear[0]}`,
          query: { q: q ? q : undefined },
        }"
      >
        <h2 class="my-4 font-serif text-2xl italic">{{ inThatYear[0] }}</h2>
      </NuxtLink>
      <ul v-if="Array.isArray(inThatYear)">
        <li v-for="content in inThatYear[1]" :key="content.slug" class="mb-8">
          <!-- eslint-disable vue/no-v-html -->
          <NuxtLink
            :lang="content.locale ? content.locale : 'en-CA'"
            :to="{
              path: content.path,
              meta: {
                locale: content.locale ? content.locale : 'en-CA',
                date: content.date,
              },
            }"
            class="font-serif text-xl italic no-underline"
            v-html="abbreviatize(content.title)"
          />
          <div
            v-if="content.prettyfiedTemporalDate"
            class="mt-0 mb-2 font-serif text-sm italic"
          >
            <time :datetime="content.prettyfiedTemporalDate.temporalDate">
              {{ content.prettyfiedTemporalDate.prettified }}
            </time>
          </div>
          <div
            v-if="content.excerpt"
            class="mt-0 mb-5 font-serif text-md"
          >
            {{ content.excerpt }}
          </div>
          <app-article-tags
            :link="true"
            :content="content"
            class="mt-2 mb-4"
          />
        </li>
      </ul>
      <div class="h-5 -ml-10">&nbsp;</div>
    </div>
    <div v-if="byYears.length < 1">
      <p class="font-serif text-lg italic">
        Looks like I haven’t written anything
      </p>
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
    showYear: boolean
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
      showYear: {
        type: Boolean,
        default: true,
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
