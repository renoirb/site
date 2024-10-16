# Renoir Boulanger&#39;s WebSites

Rewriting [renoirb/site][github-renoirb-site]

**STATUS** Under **HEAVY** Development.

## Bookmarks

### Docs useful during maintenance

- [Prism supported languages](https://prismjs.com/#supported-languages)
- **Nuxt** docs for this present version (2024: it's 4 years old now!)
  (nuxt-content 1.8.1, nuxt 2.14)
  - [**Nuxt v2 Docs**](https://v2.nuxt.com/docs/)
  - [**Nuxt**: fetch](https://github.com/nuxt/docs/blob/master/en/api/pages-fetch.md)
- **Nuxt/content** `v1.8.1`
  - [Advanced](https://github.com/nuxt/content/blob/%40nuxt/content%401.8.1/docs/content/en/advanced.md)
  - [Querying](https://github.com/nuxt/content/blob/%40nuxt/content%401.8.1/docs/content/en/fetching.md#wherequery)
  - [Snippets](https://github.com/nuxt/content/blob/v1-dev/docs/content/en/snippets.md#L0)
  - [**Nuxt/content dependency Loki** Querying](https://github.com/techfort/LokiJS/wiki/Query-Examples)
  - https://content.nuxt.com/v1/getting-started/writing
  - [**Nuxt/content** integrations](https://github.com/nuxt/content/blob/v1-dev/docs/content/en/integrations.md)
    - @nuxtjs/feed `v2.0`
      - [Integration Docs](https://github.com/nuxt/content/blob/v1-dev/docs/content/en/integrations.md#nuxtjsfeed)
      - [Code](https://github.com/nuxt-community/feed-module), [Depends on **feed** `^4.2.0`](https://github.com/nuxt-community/feed-module/blob/7c8595d1/package.json#L36)
      - [**feed** NPM package](https://www.npmjs.com/package/feed)
      - [**feed** Source](https://github.com/jpmonette/feed/blob/4.2.0/package.json)
    - [@nuxtjs/sitemap](https://github.com/nuxt/content/blob/v1-dev/docs/content/en/integrations.md#nuxtjssitemap)
- **Vue** v2:
  - https://v2.vuejs.org/v2/api/#ignoredElements
  - https://github.com/nuxt/vue-meta/tree/master/docs/api
- **@nuxt/vue-app** **vue-meta** v`^2.4.0`
  - https://github.com/nuxt/vue-meta/tree/v2.4.0/docs

#### Insightful in-depth posts I appreciated

- [**nuxt/content** common issues and how to shrink static db file](https://damieng.com/blog/2024/05/14/nuxt-content-db-and-size/)

### Official docs

- Nuxt.js
  - [Going full Static][article-going-full-static]
  - [Nuxt.js _Guides_][nuxtjs-guides]
  - [Nuxt.js w/ _TypeScript_][nuxtjs-typescript]
  - [Nuxt.js _content_][nuxtjs-content]
  - [Query syntax examples][nuxtjs-content-where-examples]
  - [Nuxt.js _PWA_][nuxtjs-pwa]
  - [nuxt-community/composition-api][nuxt-community-composition-api]
- [Vue composition-api][vue-next-composition-api]
- [Tailwind CSS v1.x](https://v1.tailwindcss.com/docs/)

### Useful _TypeScript_ + _Nuxt.js_ community curated examples

- [nuxt-community/hackernews-nuxt-ts (_link to my own
  fork_)][github-renoirb-hackernews-experiment]

[vue-next-composition-api]: https://composition-api.nuxtjs.org/
[article-going-full-static]:
  https://nuxtjs.org/blog/going-full-static
  'Going Full Static'
[github-renoirb-hackernews-experiment]:
  https://github.com/renoirb/experiments-201905-hackernews-nuxt-ts/tree/renoirb/vuex-modules
  'Experiments made in June 2019 to see how to make Strongly typed Vuex store with TypeScript'
[github-renoirb-site]: https://github.com/renoirb/site
[nuxtjs-pwa]: https://pwa.nuxtjs.org/
[nuxtjs-typescript]: https://typescript.nuxtjs.org/guide/
[nuxtjs-content]: https://content.nuxtjs.org/
[nuxtjs-content-where-examples]:
  https://github.com/techfort/LokiJS/wiki/Query-Examples#find-queries
[nuxtjs-guides]: https://nuxtjs.org/guides/
[nuxt-community-composition-api]: https://composition-api.nuxtjs.org/
