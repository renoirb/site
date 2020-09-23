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
      <li
        v-for="tag in tags"
        :key="tag"
        class="px-2 py-1 mb-3 mr-3"
        :class="{ hoverized: link }"
      >
        <!-- eslint-disable vue/no-v-html -->
        <span v-if="link === false" v-html="abbreviatize(tag)" />
        <!-- eslint-disable vue/no-v-html -->
        <nuxt-link v-else :to="`/blog/tag/${tag}`" v-html="abbreviatize(tag)" />
      </li>
    </ul>
    <span v-else class="taxonomy-items text-xs">(...)</span>
  </div>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {
    INuxtContentResult,
    typeGuardNuxtContentResult,
    Labeler,
    ILabeler,
    abbreviatize,
    IAbbreviatize,
  } from '~/lib'
  export interface Data {
    labeler: ILabeler
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {
    tags: string[]
  }
  export interface Props {
    content: INuxtContentResult
    link: boolean
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppArticleTags' /* app-article-tags */,
    props: {
      content: {
        type: Object,
        validator: typeGuardNuxtContentResult,
        required: true,
      } as PropOptions<INuxtContentResult>,
      link: {
        type: Boolean,
        default: true,
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
        const { tags = [] } = this.content
        const _tags = new Set<string>()
        for (const tag of tags) {
          if (typeof tag === 'string' && tag.replace(/[\s\t/]/g, '') !== '') {
            _tags.add(tag)
          }
        }
        return Array.from(_tags)
      },
    },
    methods: {
      abbreviatize,
    },
  })
</script>
