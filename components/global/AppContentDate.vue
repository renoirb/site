<template>
  <time v-if="content.createdAt" :datetime="datetime" :title="textual">
    {{ yyyymmdd }}
  </time>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import type { INuxtContentResult, ITemporalFormat } from '~/lib'
  import {
    getPrettyfiedTemporalDate,
    formatTemporal,
    isNuxtContentResult,
  } from '~/lib'
  export interface Data {}
  export interface Methods {
    formatDate(format: ITemporalFormat): string
  }
  export interface Computed {
    datetime: string
    yyyymmdd: string
    textual: string
  }
  export interface Props {
    content: INuxtContentResult
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppContentDate' /* app-content-date */,
    props: {
      content: {
        type: Object,
        validator: isNuxtContentResult,
        required: true,
      } as PropOptions<INuxtContentResult>,
    },
    computed: {
      yyyymmdd(): string {
        const date = this.content?.createdAt
        let out = ''
        if (date) {
          const first = date.split('T')[0]
          out = first
        }
        return out
      },
      datetime(): string {
        const createdAt = this.content?.createdAt
        return createdAt
      },
      textual(): string {
        return this.formatDate({
          format: {
            dateStyle: 'full',
          },
        })
      },
    },
    methods: {
      formatDate(format: ITemporalFormat): string {
        let out = ''
        try {
          const locale = this.content?.locale ?? 'fr-CA'
          out = this.content?.createdAt ?? ''
          const { temporalDate = '' } = getPrettyfiedTemporalDate(
            this.content,
            locale,
          )
          if (temporalDate !== '') {
            const formatted = formatTemporal(temporalDate, format)
            out = formatted
          }
        } catch {
          // Nothing to do
        }
        return out
      },
    },
  })
</script>
