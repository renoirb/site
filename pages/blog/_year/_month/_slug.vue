<template>
  <div class="pages__blog__year__month__slug--item">
    <div :key="content.slug + '--' + content.created">
      <keep-alive>
        <app-very-old-article
          :locale="content.locale || 'en-CA'"
          :date="content.created"
          class="my-4"
          alert-type="warn"
          role="alert"
        >
          <nuxt-content
            v-if="preamble && preamble.body !== null"
            :document="preamble"
          />
        </app-very-old-article>
      </keep-alive>
    </div>
    <div :key="content.slug" class="document document--item z-30">
      <div
        class="title page-title lg:pr-64 mb-4 font-serif text-2xl italic"
        data-wip="pages/blog/_year/_month/_slug.vue"
      >
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
          v-if="coverImage && coverImage.src"
          :src="coverImage.src"
          :alt="coverImage.alt ? coverImage.alt : undefined"
          :figcaption="
            abbreviatize(
              coverImage.figcaption
                ? coverImage.figcaption
                : coverImage.body !== null
                ? ' '
                : undefined,
            )
          "
          class="document-cover md:float-right lg:w-1/3 md:pl-5 sm:w-1/2 relative z-30 float-none pb-5 pl-0 mx-auto mt-1"
        >
          <nuxt-content
            v-if="coverImage && coverImage.body !== null"
            :document="coverImage"
          />
        </app-image>
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
  import { IFrontMatterInnerDocument } from '../../../../lib'
  import {
    abbreviatize,
    createNuxtContentParsedDocument,
    createVueMetaHeadScriptForHypothesis,
    createVueMetaInfo,
    getPrettyfiedTemporalDate,
  } from '~/lib'
  import type {
    IAbbreviatize,
    IFrontMatterCoverImageInnerDocument,
    INuxtContentParsedDocument,
    INuxtContentPrevNext,
    INuxtContentResult,
    IPrettyfiedTemporalDate,
  } from '~/types'
  export interface Data {
    canonical: null | string
    content: INuxtContentResult
    coverImage: IFrontMatterCoverImageInnerDocument
    month: string
    next: INuxtContentPrevNext
    preamble: INuxtContentParsedDocument
    prettyfiedTemporalDate: IPrettyfiedTemporalDate
    prev: INuxtContentPrevNext
    slug: string
    year: string
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

      let leakOutCanonical: string | null = null
      let leakOutLocale: string | '' = ''

      try {
        const dal = $content('blog', year, month, slug, { text: true })
        content = await dal.fetch()

        if (content) {
          leakOutLocale =
            'locale' in content && typeof content.locale === 'string'
              ? content.locale
              : 'fr-CA'
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

      const parsedPreamble = await createNuxtContentParsedDocument(
        content?.preamble,
        $content,
      )

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { text: __text1, ...restPreamble } = content?.preamble ?? {}
      const preamble: IFrontMatterInnerDocument = {
        ...parsedPreamble,
        ...restPreamble,
      }
      const parsedCoverImage = await createNuxtContentParsedDocument(
        content?.coverImage,
        $content,
      )
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { text: __text2, ...restCoverImage } = content?.coverImage ?? {}
      const coverImage: IFrontMatterCoverImageInnerDocument = {
        ...parsedCoverImage,
        ...restCoverImage,
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
        .where((a: INuxtContentResult) => {
          return !Reflect.has(a, 'redirect')
          /**
           * #TODO: Figure out how to avoid [1] to link to [2] that's a stub to redirect to [3].
           *
           * Also that figuring out why it apears at the wrong date as if [2] was an article published
           * before or after an article from 2015 when there's a few that are in between.
           *
           * Ideally, should:
           * - Be `status: publish`
           * - Not have a `redirect: #####`
           * - At the neighbooring published date
           *
           * [1]: ~/blog/2015/11/recover-discourse-backup-change-domain-name
           * [2]: ~/blog/2024/03/managing-email-aliases-with-protonmail-and-simplelogin-to-sort-automatically-into-inbox-folders-based-local-part
           * [3]: ~/blog/2024/03/managing-email-aliases-with-protonmail-automatic-sorting
           */
        })
        .only(['title', 'path', 'locale'])
        .sortBy('created', 'asc')
        .surround(slug)

      const items = await dal.fetch()
      const [prev, next] = items

      return {
        canonical: leakOutCanonical,
        content,
        coverImage,
        month,
        next,
        preamble,
        prettyfiedTemporalDate,
        prev,
        slug,
        year,
      }
    },
    methods: {
      abbreviatize,
    },
    head() {
      let redirect = this.content?.redirect ?? ''
      if (redirect !== '') {
        // #TODO-Meta-Equiv-Redirect
        // See related ../../../../components/global/GitHubPagesRedirect.vue
        redirect = `/blog/${this.year}/${this.month}/${redirect}`
      }
      const out = createVueMetaInfo({ ...this.content, redirect })
      if (redirect === '') {
        const item = createVueMetaHeadScriptForHypothesis()
        Reflect.set(out, 'script', [item])
      }
      return out
    },
  })
</script>

<style scoped>
  .canonical-link {
    @apply ml-5 text-sm underline;
    color: var(--color-container-text-link);
  }
  .canonical-link::before {
    content: '(';
  }
  .canonical-link::after {
    content: ')';
  }
</style>
