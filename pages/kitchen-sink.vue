<template>
  <div class="document document--item z-30">
    <header class="title page-title mb-4 font-serif text-2xl italic">
      <h1>Kitchen Sink</h1>
      <small>
        <em>
          Some hard-coded HTML patterns to make sure PostCSS purging doesn’t
          remove stuff
        </em>
      </small>
    </header>
    <div class="body">
      <div class="mb-5">
        <h2 class="mb-5">HTML CustomElement &lt;rb-notice-box /&gt;</h2>
        <rb-notice-box
          v-for="alertType of ['info', 'warn', 'error']"
          :key="alertType"
          :variant="alertType"
          class="mb-5"
        >
          <strong slot="header">
            Notice of type: <em>{{ alertType }}</em>
          </strong>
          <p>...</p>
        </rb-notice-box>
      </div>
      <div class="mb-5">
        <h2 class="mb-5">Links to check up on</h2>
        <ul class="list-disc list-inside">
          <li v-for="to in comparisons" :key="to">
            <NuxtLink v-if="!/^http/.test(to)" :to="to" class="bg-red-200">
              {{ to }}
            </NuxtLink>
            <a v-else :href="to" class="bg-blue-200" target="_blank">
              {{ to }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export interface Data {
    comparisons: string[]
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  const comparisons = [
    'https://renoirboulanger.com/blog/',
    /*                      */ '/blog/',
    'https://renoirboulanger.com/about/',
    /*                      */ '/about/',
    'https://renoirboulanger.com/home/',
    // /*                      */ '/home/',
    'https://renoirboulanger.com/ligne-editoriale/',
    /*                      */ '/ligne-editoriale/',
    'https://renoirboulanger.com/fr/me-joindre',
    // /*                      */ '/fr/me-joindre',
    'https://renoirboulanger.com/me-joindre/',
    /*                      */ '/me-joindre/',
    'https://renoirboulanger.com/cv/',
    // /*                      */ '/cv/',
    'https://renoirboulanger.com/resume/',
    // /*                      */ '/resume/',
    'https://renoirboulanger.com/resume/detailed/',
    // /*                      */ '/resume/detailed/',
    'https://registry.jsonresume.org/renoirb',
    'https://renoirboulanger.com/blog/2015/05/',
    /*                      */ '/blog/2015/05/',
    'https://renoirboulanger.com/blog/2015/',
    /*                      */ '/blog/2015/',
    // 'https://renoirboulanger.com/blog/2014/08/thoughts-learn-code-movement-managers-might-missing/',
    // /*                      */ '/blog/2014/08/thoughts-learn-code-movement-managers-might-missing/',
    'https://renoirboulanger.com/blog/2009/11/realisation-du-site-et-de-limage-«branding»-de-beebox-2008/',
    /*                      */ '/blog/2009/11/realisation-du-site-et-de-limage-«branding»-de-beebox-2008/',
    // 'https://renoirboulanger.com/styleguide/',
    // /*                      */ '/styleguide/',
    // 'https://renoirboulanger.com/styleguide/post/',
    // /*                      */ '/styleguide/post/',
    'https://renoirboulanger.com/blog/category/portfolio/',
    /*                      */ '/blog/category/portfolio/',
    'https://renoirboulanger.com/blog/category/web-integration-review/',
    /*                      */ '/blog/category/web-integration-review/',
    'https://renoirboulanger.com/blog/category/programmation/',
    'https://renoirboulanger.com/article-support/2015-embedding-font-styling-in-svg-document/',
    // /*                      */ '/article-support/2015-embedding-font-styling-in-svg-document/',
    /*                      */ '/projects/',
    'https://renoirboulanger.com/projets/',
    /*                      */ '/projets/',
    'https://renoirboulanger.com/projets/les-arnaques-sur-internet/',
    /*                      */ '/projets/les-arnaques-sur-internet/',
    // 'https://renoirboulanger.com/projets/les-arnaques-sur-internet/type-descroquerie-sur-le-web-qui-ta-bloque/',
    // /*                      */ '/projets/les-arnaques-sur-internet/type-descroquerie-sur-le-web-qui-ta-bloque/',
    // 'https://renoirboulanger.com/projets/les-arnaques-sur-internet/type-descroquerie-sur-le-web-faire-du-bruit-pour-avoir-des-vues-de-page-de-medias-sociaux/',
    // /*                      */ '/projets/les-arnaques-sur-internet/type-descroquerie-sur-le-web-faire-du-bruit-pour-avoir-des-vues-de-page-de-medias-sociaux/',
    'https://renoirboulanger.com/projets/les-arnaques-sur-internet/type-descroquerie-sur-le-web-qui-ta-bloque/',

    // Check if front-matter coverImage works
    'https://renoirboulanger.com/blog/2015/08/thoughts-improving-load-resiliency-cms-driven-websites/',
    /*                      */ '/blog/2015/08/thoughts-improving-load-resiliency-cms-driven-websites/',

    // Fix these routes.
    //                          /projets/les-arnaques-sur-internet/type-descroquerie-sur-le-web-faire-du-bruit-pour-avoir-des-vues-de-page-de-medias-sociaux
    //                          /projets/les-arnaques-sur-internet/type-descroquerie-sur-le-web-invitation-a-valider-tes-informations-prives
    //                          /projets/les-arnaques-sur-internet/type-descroquerie-sur-le-web-qui-ta-bloque

    // Will redirect for sure differently
    // /fr/me-joindre
    // What's in exported_attachments.csv
  ]
  export default Vue.extend<Data, Methods, Computed, Props>({
    data() {
      return {
        comparisons,
      }
    },
  })
</script>
