<template>
  <div class="pages__projets--index" :lang="pageLocale">
    <app-very-old-article
      date="2013-02-21T22:21:10-04:00"
      class="mb-8"
      alert-type="warn"
    >
      <p>
        Cette section est gardée telle qu'elle l'était au moment de la
        migration.
      </p>
      <p>
        Il y a maintenant plusieurs autres projets et les projets affichés ici
        sont ceux publiés avant 2013. Ces articles étaient écrits seulement en
        français.
      </p>
      <p>
        Une fois ce site complètement migré de WordPress, j'ajouterai plus de
        projets et les organiserai dans la section
        <NuxtLink to="/projects">/projects</NuxtLink>.
      </p>
    </app-very-old-article>
    <div class="document document--item z-30">
      <div class="title page-title font-serif italic">
        <h1 class="text-2xl">{{ pageTitle }}</h1>
        <p>{{ pageBlurb }}</p>
      </div>
      <div class="body mt-8">
        <div
          v-for="content in contents"
          :key="content.slug"
          class="pb-8 mb-8 border-b border-black border-dashed"
        >
          <h2 class="mb-2 font-serif text-lg italic">
            <!-- eslint-disable vue/no-v-html -->
            <NuxtLink
              v-if="content.callToAction.href"
              :to="content.callToAction.href"
              :lang="content.locale ? content.locale : 'en-CA'"
              class="no-underline"
              v-html="abbreviatize(content.title)"
            />
            <!-- eslint-disable vue/no-v-html -->
            <span
              v-else
              :lang="content.locale ? content.locale : 'en-CA'"
              v-html="abbreviatize(content.title)"
            ></span>
          </h2>
          <nuxt-content :document="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { INuxtContentResult, abbreviatize, IAbbreviatize } from '~/lib'
  export interface Data {
    contents: INuxtContentResult
    pageBlurb: string
    pageLocale: string
    pageTitle: string
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content }) {
      const pageKey = 'page-projets-initiale-pour-faire-une-migration'
      const pageLocale = 'fr-CA'
      const pageTitle = `Projets`
      const pageBlurb = `Quelques projets personnels que je publie, classé par catégorie.`

      const query = $content('projects', { deep: true })
        .where({ pageKey: { $contains: pageKey }, locale: { $eq: pageLocale } })
        .sortBy('created', 'desc')
      const contents = (await query.fetch()) as INuxtContentResult[]

      return {
        contents,
        pageBlurb,
        pageLocale,
        pageTitle,
      }
    },
    methods: {
      abbreviatize,
    },
  })
</script>
