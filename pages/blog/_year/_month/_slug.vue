<template>
  <div class="pages__blog__year__month__slug--item">
    <app-very-old-article
      :locale="content.locale || 'en-CA'"
      :date="content.date"
      class="my-4"
    >
      {{ veryOldContent }}
    </app-very-old-article>
    <div class="document document--item">
      <div class="title page-title mb-2">
        <!-- eslint-disable vue/no-v-html -->
        <h1 v-html="abbreviatize(content.title)" />
      </div>
      <div v-if="temporalDate" class="mt-0 mb-5 font-serif text-sm italic">
        <time :datetime="temporalDate">
          {{ publishedAtString }}
        </time>
      </div>
      <app-article-tags :content="content" class="mt-0 mb-5" />
      <div class="body mt-10">
        <nuxt-content :document="content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Temporal } from 'proposal-temporal'
  import {
    abbreviatize,
    ensureValidCalendar,
    IAbbreviatize,
    INuxtContentResult,
  } from '~/lib'
  export interface Data {
    content: INuxtContentResult
    year: string
    month: string
    slug: string
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'app-article-tags': () => import('@/components/AppArticleTags.vue'),
    },
    async asyncData({ $content, params, error }) {
      const { year, month, slug } = params

      // TODO: Make configurable for current user, like dark-mode would, and preferred locale
      const userPreferedCalendar = ensureValidCalendar('gregory')

      let content: INuxtContentResult | void
      let publishedAtString: string | '' = ''
      let temporalDate: Temporal.Date | null = null
      let veryOldContent: string | null = null

      try {
        content = await $content('blog', year, month, slug).fetch()
        const {
          date = `${year}-${month}-01`,
          oldArticle = null,
          locale = 'en-CA',
        } = content as INuxtContentResult
        veryOldContent = oldArticle
        temporalDate = Temporal.Date.from(String(date))
        const localeStringOptions = {
          calendar: userPreferedCalendar,
          weekday: 'long',
          day: 'numeric',
          year: 'numeric',
          month: 'long',
        }
        publishedAtString = temporalDate.toLocaleString(
          locale,
          localeStringOptions,
        )
      } catch (e) {
        error({ message: 'Document not found' })
      }

      return {
        publishedAtString,
        veryOldContent,
        temporalDate,
        year,
        month,
        slug,
        content,
      }
    },
    methods: {
      abbreviatize,
    },
    head() {
      const {
        locale = 'en-CA',
        title,
        tags = [],
        categories = [],
      } = this.content

      const meta = [
        {
          hid: 'keywords',
          name: 'keywords',
          content: [...categories, ...tags].join(' '),
        },
      ]

      const htmlAttrs = {
        lang: locale,
      }

      const out = {
        htmlAttrs,
        title,
        meta,
      }
      return out
    },
  })
</script>
