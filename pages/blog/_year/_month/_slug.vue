<template>
  <div class="pages__blog__year__month__slug--item">
    <app-very-old-article
      :locale="content.locale || 'en-CA'"
      :date="content.date"
      class="my-4"
      alert-type="warn"
    >
      <nuxt-content
        v-if="preamble && preamble.document !== null"
        :document="preamble && preamble.document"
      />
    </app-very-old-article>

    <div class="document document--item z-30">
      <div class="title page-title mb-4 font-serif text-2xl italic">
        <!-- eslint-disable vue/no-v-html -->
        <h1 v-html="abbreviatize(content.title)" />
      </div>
      <div
        v-if="prettyfiedTemporalDate.temporalDate"
        class="mt-0 mb-5 font-serif text-sm italic"
      >
        <time :datetime="prettyfiedTemporalDate.temporalDate">
          {{ prettyfiedTemporalDate.prettified }}
        </time>
      </div>
      <app-article-tags :content="content" class="mt-0 mb-5" />
      <div class="body mt-10">
        <app-image
          v-if="coverImage !== ''"
          :src="coverImage"
          :alt="coverImageAlt"
          :figcaption="coverImageCaption"
          class="md:float-right md:ml-5 mb-5"
        />
        <nuxt-content :document="content" />
      </div>
      <app-prev-next class="my-10" :prev="prev" :next="next" />
    </div>
  </div>
</template>

<script lang="ts">
  /** eslint-disable @typescript-eslint/no-unused-vars no-unused-vars */
  import Vue from 'vue'
  import {
    abbreviatize,
    getPrettyfiedTemporalDate,
    IAbbreviatize,
    INuxtContentPrevNext,
    INuxtContentResult,
    IPrettyfiedTemporalDate,
    extractFrontMatterInnerDocument,
    IFrontMatterInnerDocument,
  } from '~/lib'
  export interface Data {
    prev: INuxtContentPrevNext
    next: INuxtContentPrevNext
    content: INuxtContentResult
    prettyfiedTemporalDate: IPrettyfiedTemporalDate
    agedWarning: string | null
    year: string
    month: string
    slug: string
    coverImage: '' | string
    coverImageCaption: '' | string
    coverImageAlt: '' | string
    preamble: IFrontMatterInnerDocument | null
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
      const fallbackLocale = 'fr-CA'

      let content: INuxtContentResult | null = null
      let agedWarning: string | null = null
      let coverImage: string | '' = ''
      let coverImageCaption: string | '' = ''
      let coverImageAlt: string | '' = ''

      let leakOutLocale: string | '' = ''
      let preamble: IFrontMatterInnerDocument | null = null

      try {
        const dal = $content('blog', year, month, slug, { text: true })
        content = await dal.fetch()

        if (content) {
          try {
            const maybePreamble = extractFrontMatterInnerDocument(
              content,
              'preamble',
            )
            if (maybePreamble && preamble === null) {
              preamble = maybePreamble
            }
          } catch (_) {
            // ....
          }
        }

        const {
          oldArticle = null,
          cover = '',
          coverCaption = '',
          coverAlt = '',
          locale = 'en-CA',
        } = content as INuxtContentResult
        leakOutLocale = locale
        coverImage = cover
        coverImageCaption = coverCaption
        coverImageAlt = coverAlt
        agedWarning = oldArticle
      } catch (e) {
        error({ message: 'Document not found' })
      }

      if (!content) {
        error({ message: 'Document not found' })
      }

      if (leakOutLocale === '') {
        /** @TODO find out why no errors, yet no locale set */
        leakOutLocale = fallbackLocale
      }

      const prettyfiedTemporalDate = getPrettyfiedTemporalDate(
        content as INuxtContentResult,
        leakOutLocale,
      )

      const dal = $content('blog', { deep: true })
        .only(['title', 'path', 'locale'])
        .sortBy('createdAt', 'asc')
        .surround(slug)

      const [prev, next] = (await dal.fetch()) as [
        INuxtContentPrevNext,
        INuxtContentPrevNext,
      ]

      return {
        prev,
        next,
        content,
        coverImage,
        coverImageCaption,
        coverImageAlt,
        prettyfiedTemporalDate,
        agedWarning,
        preamble,
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
