<template>
  <div class="pages__projets--index">
    <app-very-old-article locale="fr-CA" date="2013-02-21T22:21:10-04:00">
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
    <h2 class="mb-2 text-xl">Projets</h2>
    <p>Quelques projets personnels que j'ai publié.</p>
    <div v-for="document in documents" :key="document.slug">
      <h3 class="mb-2 text-lg">
        <nuxt-link v-if="document.to" :to="document.to">
          {{ document.title }}
        </nuxt-link>
        <span v-else>{{ document.title }}</span>
      </h3>
      <nuxt-content :document="document" />
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
  import { INuxtContentResult } from '~/lib'
  export interface Data {
    document: INuxtContentResult
  }
  export interface Props {}
  export default defineComponent<Props, Data>({
    async asyncData({ $content }) {
      const pageKey = 'page-projets-initiale-pour-faire-une-migration'
      const locale = 'fr-CA'
      const query = $content('projects')
      const documents = (await query
        .where({ pageKey: { $contains: pageKey }, locale: { $eq: locale } })
        .sortBy('date', 'desc')
        .fetch()) as INuxtContentResult[]

      return {
        documents,
      }
    },
  })
</script>
