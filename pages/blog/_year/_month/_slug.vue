<template>
  <div class="pages__blog__year__month__slug--item">
    <app-very-old-article
      :locale="document.locale || 'en-CA'"
      :date="document.date"
      class="my-4"
    >
      {{ veryOldContent }}
    </app-very-old-article>
    <div class="document document--item">
      <div class="title page-title mb-2">
        <h1>
          {{ document.title }}
        </h1>
      </div>
      <div v-if="temporalDate" class="mt-0 mb-5 font-serif text-sm italic">
        <time :datetime="temporalDate">
          {{ publishedAtString }}
        </time>
      </div>
      <app-article-tags :document="document" class="mt-0 mb-5" />
      <div class="body mt-10">
        <nuxt-content :document="document" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Temporal } from 'proposal-temporal'
  import AppArticleTags from '~/components/AppArticleTags.vue'
  import { INuxtContentResult, ensureValidCalendar } from '~/lib'
  export interface Data {
    document: INuxtContentResult
    year: string
    month: string
    slug: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    components: {
      'app-article-tags': AppArticleTags,
    },
    async asyncData({ $content, params, error }) {
      const { year, month, slug } = params

      // TODO
      const userPreferedCalendar = ensureValidCalendar('')

      let document: INuxtContentResult | void
      let publishedAtString: string | '' = ''
      let temporalDate: Temporal.Date | null = null
      let veryOldContent: string | null = null

      try {
        document = (await $content(
          'blog',
          year,
          month,
          slug,
        ).fetch()) as INuxtContentResult
        const {
          date = `${year}-${month}-01`,
          oldArticle = null,
          locale = 'en-CA',
        } = document
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
        document,
      }
    },
    head() {
      const {
        locale = 'en-CA',
        title,
        tags = [],
        categories = [],
      } = this.document

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
