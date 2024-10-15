<template>
  <rb-notice-box
    v-if="shouldBeVisible"
    :variant="alertType"
    class="disposition-parent app-alert-box"
    role="alert"
  >
    <!--
      @TODO Figure out a way NOT to do such tag-soup ^
      styleMap was supposed to be doing this, but PurgeCSS
      removes them. Gotta fix this before re-using styleMap.
    -->
    <!-- eslint-disable vue/no-v-html -->
    <strong
      v-if="titleTextContent !== ''"
      slot="header"
      v-html="abbreviatize(titleTextContent)"
    />
    <!-- eslint-disable vue/no-v-html -->
    <p
      v-if="messageTextContent !== ''"
      v-html="abbreviatize(messageTextContent)"
    />
    <slot />
  </rb-notice-box>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import { abbreviatize, IAbbreviatize, IAlertType } from '~/lib'
  export interface Data {
    messageTextContent: string
    titleTextContent: string
    shouldBeVisible: boolean
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {}
  export interface Props {
    title: string
    message: string
    alertType: IAlertType
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppAlertBox' /* app-alert-box */,
    props: {
      title: {
        type: String,
        required: false,
        default: '',
      },
      message: {
        type: String,
        required: false,
        default: '',
      },
      alertType: {
        type: String,
        required: false,
        default: 'info',
      } as PropOptions<IAlertType>,
    },
    data() {
      const messageTextContent = this.message || ''
      const titleTextContent = this.title || ''
      const out = {
        messageTextContent,
        titleTextContent,
        shouldBeVisible: true,
      }
      return out
    },
    methods: {
      abbreviatize,
    },
  })
</script>
