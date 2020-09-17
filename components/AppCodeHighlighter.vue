<template>
  <div class="nuxt-content-highlight">
    <!-- eslint-disable vue/no-v-html -->
    <pre :class="classNames"><slot><code v-html="code" /></slot>
    <!-- code v-html="$prism(code, language)"></code -->
    </pre>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { isPrismSupportedLanguage } from '~/lib'
  export interface Data {}
  export interface Methods {}
  export interface Computed {
    classNames: Record<string, boolean>
  }
  export interface Props {
    language: string
    code: string
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppCodeHighlighter' /* app-code-highlighter */,
    props: {
      language: {
        type: String,
        default: 'javascript',
        validator: isPrismSupportedLanguage,
      },
      code: {
        type: String,
        default: '',
      },
    },
    computed: {
      classNames() {
        const languageClassName = `language-${this.language}`
        return {
          [languageClassName]: true,
        }
      },
    },
    /**
     * @TODO Either make this work or remove.
     * Intent is to have HTML already colorized for
     * static HTML.
     * Or keep using asyncData and server-side (i.e. at generate) do
     * any code colorization to HTML from there.
    async mounted() {
      const code = this.code
      const language = this.language
      let maybe = code
      const highlighting = () => {
        maybe = highlight(code, language)
      }
      await this.$nextTick(highlighting)
      console.log('async mounted', { code, maybe }) // eslint-disable-line
      // this.$refs.code.innerHTML = code
    },
    */
  })
</script>
