<template>
  <div class="pages__ligne-editoriale--parent">
    <div class="document document--item">
      <div class="title page-title mb-5">
        <h1>{{ pageTitle }}</h1>
      </div>
      <div class="body">
        <app-alert-box :message="noteAboutSource" class="my-5">
          <a :href="source"> Document source </a>
        </app-alert-box>
        <div class="nuxt-content">
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
      const ds: IMingledNuxtContentResultAndResume = await $content(
        'resume/jsonresume-renoirb',
        /* nuxt/content yaml parser doesn't have same markdown's { text: true }, */
      ).fetch()

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
      const rawAsYaml = JsYaml.safeDump(copy)
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
          Note that the YAML version shown here is the parsed version, the
          original version is leveraging benefits of the YAML.
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
