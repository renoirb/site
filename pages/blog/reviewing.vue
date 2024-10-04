<template>
  <div class="pages__blog__tag--index">
    <div class="document document--collection">
      <div class="title page-title font-serif text-2xl italic">
        <h1>
          Reviewing <small>({{ count }})</small>
        </h1>
      </div>
      <div class="body">
        <ul>
          <li v-for="content in contents" :key="content.slug">
            <NuxtLink :to="content.path">
              {{ content.dir }} {{ content.title }}
            </NuxtLink>
            &nbsp;
            <small v-if="content.canonical">
              (<a :href="content.canonical"> canonical </a>)
            </small>
            <details>
              <summary>{{ createFlagString(content) }}</summary>
              <pre>{{ content }}</pre>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { findExcludingRedirectPredicate } from '~/lib'
  import type { INuxtContentResult } from '~/lib'
  interface WithReviewingProps {
    caption?: boolean
    gallery?: boolean
    images?: boolean
  }
  type FlagsString = (m: WithReviewingProps) => string
  export interface Data {
    contents: INuxtContentResult[]
    count: number
  }
  export interface Methods {
    createFlagString: FlagsString
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content }) {
      const ds = $content('blog', { deep: true })
        .where({ revising: true })
        .without([
          'body',
          'categories',
          'coverImage',
          'description',
          'excerpt',
          'extension',
          'keywords',
          'preamble',
          'tags',
          'toc',
          'waybackMachineSnapshots',
        ])
        .sortBy('created', 'desc')
      const fetched = await ds.fetch()
      const contents = fetched.filter((a) =>
        findExcludingRedirectPredicate(a as INuxtContentResult),
      )
      const count = contents.length
      return {
        contents,
        count,
      }
    },
    data() {
      return {
        contents: [],
        count: 0,
      }
    },
    methods: {
      createFlagString: ({ caption, gallery, images }) => {
        return [
          caption === true ? 'C' : '-',
          gallery === true ? 'G' : '-',
          images === true ? 'I' : '-',
        ].join(' ')
      },
    },
  })
</script>
