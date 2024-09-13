<template>
  <div
    class="taxonomy"
    :class="{ 'taxonomy-not-hoverizable': !link, 'taxonomy-hoverizable': link }"
  >
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
        :class="{ 'is-hoverizable': link }"
      >
        <!-- eslint-disable vue/no-v-html -->
        <span v-if="link === false" v-html="abbreviatize(tag)" />
        <!-- eslint-disable vue/no-v-html -->
        <NuxtLink
          v-else
          :to="`/blog/tag/${String(tag).toLocaleLowerCase()}`"
          class="no-underline"
          v-html="abbreviatize(tag)"
        />
      </li>
      <li
        v-if="category"
        class="category px-2 py-1 mb-3 mr-3"
        :class="{ 'is-hoverizable': link }"
      >
        <NuxtLink
          :to="`/blog/category/${String(category).toLocaleLowerCase()}`"
          class="no-underline"
          v-html="abbreviatize('📁 ' + category)"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {
    INuxtContentResult,
    isNuxtContentResult,
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
    category: null | string
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
        validator: isNuxtContentResult,
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
        const _tags = new Set<string>()
        if ('tags' in this.content && this.content.tags) {
          const tags: string[] = (this.content.tags ?? [])
            .map((t) => typeof t === 'string' && t.replace(/[\s\t/]/g, ''))
            .filter((t) => t !== '')
            .filter((t) => t !== 'on-front-page')
          for (const tag of tags) {
            _tags.add(tag)
          }
        }
        const out = Array.from(_tags)
        return out
      },
      category(): null | string {
        let out: null | string = null
        if ('categories' in this.content && this.content.categories) {
          if (
            Array.isArray(this.content.categories) &&
            this.content.categories[0]
          ) {
            out = this.content.categories[0]
          }
        }
        return out
      },
    },
    methods: {
      abbreviatize,
    },
  })
</script>
