<template>
  <div class="pages__ligne-editoriale--parent">
    <div class="document document--item z-30">
      <div class="title page-title mb-5 font-serif text-2xl italic">
        <h1>{{ pageTitle }}</h1>
      </div>
      <div class="body">
        <app-alert-box :message="noteAboutSource" class="my-5">
          <a :href="source" target="_blank">Document source</a>
        </app-alert-box>
        <div class="nuxt-content">
          <h2>Other versions</h2>
          <ul class="list-none list-inside">
            <li>
              <a
                href="https://renoirb.github.io/site/files/resume/Resume-Renoir-Boulanger.pdf"
                title="Renoir Boulanger Resume in Adobe Acrobat Format"
              >
                PDF
              </a>
            </li>
            <li>
              <a
                href="https://renoirb.github.io/site/files/resume/Resume-Renoir-Boulanger.doc"
                title="Renoir Boulanger Resume in Microsoft Word Format"
              >
                Word
              </a>
            </li>
            <li>
              <a
                href="https://registry.jsonresume.org/renoirb"
                title="Renoir Boulanger Resume in HTML"
                target="_blank"
              >
                HTML hosted on JSONResume public registry
              </a>
            </li>
          </ul>
          <h2>As code</h2>
          <code-group>
            <code-block label="YAML" active>
              <app-code-highlighter language="yaml" :code="asYaml" />
            </code-block>
            <code-block label="JSON">
              <div class="nuxt-content-highlight">
                <!-- eslint-disable vue/no-v-html -->
                <pre class="language-json"><code v-html="asJson"></code>
                </pre>
              </div>
            </code-block>
          </code-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import * as JsYaml from 'js-yaml'
  import { ResumeInterface } from 'jsonresume-from-yaml'
  import { INuxtContentResult, trimText } from '~/lib'

  /**
   * @TODO
   * - Convert using jsonresume-model
   * - Get typings from jsonresume-model
   * - Throw errors ^ so editing resume will be possible from nuxt-content's double click edit feature
   *
   * Bookmarks:
   * - https://gitlab.com/renoirb/renoirb-particles/-/tree/master/libraries/jsonresume-model
   */
  export interface IResumeMeta {
    theme: string
    lastModified: string
    canonical: string
    alternate: string
    source: string
  }
  export interface IResume extends ResumeInterface {
    meta?: IResumeMeta
  }
  type IMingledNuxtContentResultAndResume = INuxtContentResult & IResume

  export interface Data {
    content: INuxtContentResult
    resume: ResumeInterface
    pageTitle: string
    asYaml: string
    asJson: string
    source: string
  }
  export interface Methods {}
  export interface Computed {
    noteAboutSource: string
  }
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    layout: 'default',
    components: {
      'app-code-highlighter': () =>
        import('@/components/AppCodeHighlighter.vue'),
    },
    async asyncData({ $content, app }) {
      const dal = $content('resume/jsonresume-renoirb', { text: true })

      const ds: IMingledNuxtContentResultAndResume = await dal.fetch()

      const {
        meta = {} as IResumeMeta,
        basics,
        work,
        education,
        awards,
        publications,
        skills,
        languages,
        interests,
        ...content
      } = ds
      const resume: IResume = {
        basics,
        work,
        education,
        awards,
        publications,
        skills,
        languages,
        interests,
      }

      // TODO: Figure out why YAML is ignoring this bit.
      // ... maybe jsonresume-from-yaml is.
      const {
        source = 'https://github.com/renoirb/site/blob/2020/content/resume/jsonresume-renoirb.yaml',
      } = meta

      const { name = 'John Doe' } = basics as ResumeInterface['basics']
      const pageTitle = `Curriculum vitæ of ${name}`

      const copy = Object.assign(
        {},
        {
          $schema:
            'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
        },
        resume,
      ) as any
      let rawAsYaml: string = ''
      // @ts-ignore
      if ('text' in content && typeof content.text === 'string') {
        // @ts-ignore
        rawAsYaml = content.text
      } else {
        rawAsYaml = JsYaml.safeDump(copy)
      }
      const asYaml = app.$prism(rawAsYaml, 'yaml')

      const rawAsJson = JSON.stringify(copy, null, 2)
      const asJson = app.$prism(rawAsJson, 'json')

      return {
        asJson,
        asYaml,
        content,
        pageTitle,
        resume,
        source,
      }
    },
    computed: {
      noteAboutSource(): string {
        const out = trimText`
          Note that the YAML version shown here may differ from the original,
          it might be the parsed version (i.e. same as JSON output).
          You can have a look at the source document in the following link.
        `
        return out
      },
    },
    head() {
      const title = this.pageTitle
      const out = {
        title,
      }
      return out
    },
  })
</script>
