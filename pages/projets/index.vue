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
        <nuxt-link to="/projects">/projects</nuxt-link>.
      </p>
    </app-very-old-article>
    <div class="document document--item z-30">
      <div class="title page-title mb-2 font-serif text-2xl italic">
        <h1>Projets</h1>
      </div>
      <div class="body mt-8">
        <div
          v-for="content in contents"
          :key="content.slug"
          class="pb-8 mb-8 border-b border-black border-dashed"
        >
          <h3 class="mb-2 font-serif text-lg italic">
            <nuxt-link v-if="content.to" :to="content.to">
              {{ content.title }}
            </nuxt-link>
            <span v-else>{{ content.title }}</span>
          </h3>
          <nuxt-content :document="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    content: INuxtContentResult
    pageLocale: string
  }
  export interface Props {}
  export default defineComponent<Props, Data>({
    async asyncData({ $content }) {
      const pageKey = 'page-projets-initiale-pour-faire-une-migration'
      const pageLocale = 'fr-CA'

      const query = $content('projects', { deep: true })
        .where({ pageKey: { $contains: pageKey }, locale: { $eq: pageLocale } })
        .sortBy('created', 'desc')
      const contents = (await query.fetch()) as INuxtContentResult[]

      return {
        pageLocale,
        contents,
      }
    },
  })
</script>
