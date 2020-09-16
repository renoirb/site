<template>
  <div class="taxonomy">
    <strong
      v-if="labeler.hasLabel"
      :id="labeler.label.id"
      class="taxonomy-label"
    >
      {{ labeler.label.textContent }}
    </strong>
    <ul v-if="tags.length > 0" v-bind="labeler.labelee" class="taxonomy-items">
      <li v-for="tag in tags" :key="tag">
        <nuxt-link :to="`/blog/tag/${tag}`">
          {{ tag }}
        </nuxt-link>
      </li>
    </ul>
    <span v-else class="taxonomy-items">(...)</span>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    INuxtContentResult,
    typeGuardNuxtContentResult,
    Labeler,
    ILabeler,
  } from '~/lib'
  export interface Data {
    labeler: ILabeler
  }
  export interface Methods {}
  export interface Computed {
    tags: string[]
  }
  export interface Props {
    document: INuxtContentResult
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppArticleTags' /* app-article-tags */,
    props: {
      document: {
        type: Object,
        validator: typeGuardNuxtContentResult,
        required: true,
      },
    },
    data() {
      const label = 'Tags'
      const labeler = new Labeler(label)
      return {
        labeler,
      }
    },
    computed: {
      tags(): string[] {
        const { tags = [] } = this.document
        const _tags = new Set<string>()
        for (const tag of tags) {
          if (typeof tag === 'string' && tag.replace(/[\s\t/]/g, '') !== '') {
            _tags.add(tag)
          }
        }
        return Array.from(_tags)
      },
    },
  })
</script>
