<template>
  <div
    v-if="isOldEnough === true"
    :class="styleMap.outer"
    class="relative border rounded"
    role="alert"
  >
    <div class="px-2 py-1 font-bold" :class="styleMap.heading">
      {{ title }}
    </div>
    <div class="px-2 py-1">
      {{ message }}
    </div>
    <div v-if="$slots.default" class="addemdum px-2 py-1">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {
    FALLBACK_LANG_CODE,
    FALLBACK_LOCALE,
    FALLBACK_TODAY_DATE,
    IStyleMapAlert,
    styleMapAlert,
    YEAR_CONSIDERED_OLD,
  } from '~/lib'

  export interface Data {}
  export interface Methods {}
  export interface Computed {
    styleMap: IStyleMapAlert
    langCode: string
    title: string
    message: string
    isOldEnough: boolean
    year: number
  }
  export interface Props {
    locale: string
    date: string
  }

  const titles = new Map<string, string>()
  titles.set('fr', 'Attention: Vieux contenu')
  titles.set('en', 'Warning: Old content')

  const messages = new Map<string, string>()
  messages.set(
    'fr',
    `
      Ceci date de YEAR.
      Comparé a aujourd’hui et les langages web modernes et typés depuis TypeScript et PHP 7,
      tout est différent.
      Il est possible qu'il y ait une meilleure méthode ailleurs.
    `,
  )
  messages.set(
    'en',
    `
      This is dating from YEAR.
      This was a very different time from nowadays with strictly typed PHP 7 and TypeScript.
      I recommend you do not take this as advice too seriously, there might be a better way elsewhere.
    `,
  )

  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'VeryOldArticle',
    props: {
      locale: {
        type: String,
        default: FALLBACK_LOCALE,
      },
      date: {
        type: String,
        default: FALLBACK_TODAY_DATE,
      },
    },
    computed: {
      styleMap(): IStyleMapAlert {
        const map = styleMapAlert('warn')
        return map
      },
      year(): number {
        let out: number = new Date().getFullYear()
        if (/\d{0,4}/.test(this.date || '')) {
          const year = this.date.split('-')[0]
          out = Number(year)
        }
        return out
      },
      langCode(): string {
        const locale = this.locale
        let candidate = String(locale).split('-')[0]
        if (['fr', 'en'].includes(candidate) === false) {
          candidate = FALLBACK_LANG_CODE
        }
        return candidate
      },
      title(): string {
        const lc = this.langCode
        let textContent = ''
        const maybeTextContent =
          typeof lc === 'string' && titles.has(lc)
            ? titles.get(lc)
            : titles.get(FALLBACK_LANG_CODE)
        if (typeof maybeTextContent === 'string') {
          textContent = maybeTextContent
        }
        return textContent
      },
      message(): string {
        const lc = this.langCode
        let textContent = ''
        const maybeTextContent =
          typeof lc === 'string' && messages.has(lc)
            ? messages.get(lc)
            : messages.get(FALLBACK_LANG_CODE)
        if (typeof maybeTextContent === 'string') {
          const yyyy = String(this.year)
          textContent = maybeTextContent
          textContent = textContent.replace(/YEAR/, yyyy)
        }
        return textContent
      },
      isOldEnough(): boolean {
        return YEAR_CONSIDERED_OLD > this.year
      },
    },
  })
</script>

<style scoped>
  .addemdum {
    margin: 5px 0;
    border-color: 1px solid #555;
  }
</style>
