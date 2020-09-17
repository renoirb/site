<script lang="ts">
  import Vue from 'vue'
  import AppAlertBox, {
    Data as IAppAlertBoxData,
  } from '@/components/global/AppAlertBox.vue'
  import {
    FALLBACK_LANG_CODE,
    FALLBACK_LOCALE,
    FALLBACK_TODAY_DATE,
    YEAR_CONSIDERED_OLD,
    IAlertType,
  } from '~/lib'

  export interface Data extends IAppAlertBoxData {
    alertType: IAlertType
  }
  export interface Methods {}
  export interface Computed {
    langCode: string
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
    name: 'AppVeryOldArticle' /* app-very-old-article */,
    extends: AppAlertBox,
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
      isOldEnough(): boolean {
        return YEAR_CONSIDERED_OLD > this.year
      },
    },
    beforeMount() {
      this.alertType = 'warn'
      const langCode = this.langCode
      let textContent = ''
      const maybeTextContent =
        typeof langCode === 'string' && messages.has(langCode)
          ? messages.get(langCode)
          : messages.get(FALLBACK_LANG_CODE)
      if (typeof maybeTextContent === 'string') {
        const yyyy = String(this.year)
        textContent = maybeTextContent
        textContent = textContent.replace(/YEAR/, yyyy)
      }
      this.messageTextContent = textContent

      const titleTextContentMaybe =
        typeof langCode === 'string' && titles.has(langCode)
          ? titles.get(langCode)
          : titles.get(FALLBACK_LANG_CODE)
      if (typeof titleTextContentMaybe === 'string') {
        this.titleTextContent = titleTextContentMaybe
      }
    },
  })
</script>
