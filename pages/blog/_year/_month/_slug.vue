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
        <a
          v-if="canonical"
          :href="canonical"
          class="canonical-link"
          lang="en"
          target="_blank"
          title="Canonical link, the URL it is meant to replace"
        >
          Canonical
        </a>
      </div>
      <app-article-tags :content="content" class="mt-0 mb-5" />
      <div class="body mt-10">
        <app-image
          v-if="coverImage !== ''"
          :src="coverImage"
          :alt="coverImageAlt"
          :figcaption="coverImageCaption"
          class="document-cover md:float-right lg:w-1/3 md:pl-5 sm:w-1/2 z-30 float-none pb-5 pl-0 mx-auto mt-1"
        />
        <nuxt-content :document="content" />
        <div class="clearfix" />
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
    canonical: null | string
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

      let leakOutCanonical: string | null = null
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
          leakOutLocale =
            'locale' in content && typeof content.locale === 'string'
              ? content.locale
              : 'fr-CA'
          coverImage =
            'cover' in content && typeof content.cover === 'string'
              ? content.cover
              : ''
          coverImageCaption =
            'coverCaption' in content &&
            typeof content.coverCaption === 'string'
              ? content.coverCaption
              : ''
          coverImageAlt =
            'coverAlt' in content && typeof content.coverAlt === 'string'
              ? content.coverAlt
              : ''
          agedWarning =
            'oldArticle' in content && typeof content.oldArticle === 'string'
              ? content.oldArticle
              : null
          leakOutCanonical =
            'canonical' in content && typeof content.canonical === 'string'
              ? content.canonical
              : null
        }
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
        agedWarning,
        canonical: leakOutCanonical,
        content,
        coverImage,
        coverImageAlt,
        coverImageCaption,
        preamble,
        prettyfiedTemporalDate,
        prev,
        next,
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

<style scoped>
  .canonical-link {
    @apply text-sm underline ml-5;
    color: var(--color-container-text-link);
  }
  .canonical-link::before {
    content: '(';
  }
  .canonical-link::after {
    content: ')';
  }
</style>
