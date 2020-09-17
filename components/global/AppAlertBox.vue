<template>
  <div
    :class="styleMap.outer"
    :data-alert-type="alertType"
    class="disposition-parent app-alert-box"
    role="alert"
  >
    <!--
      @TODO Figure out a way NOT to do such tag-soup ^
      styleMap was supposed to be doing this, but PurgeCSS
      removes them. Gotta fix this before re-using styleMap.
    -->
    <!-- eslint-disable vue/no-v-html -->
    <header
      v-if="titleTextContent !== ''"
      class="disposition-item"
      v-html="abbreviatize(titleTextContent)"
    />
    <!-- eslint-disable vue/no-v-html -->
    <div
      v-if="messageTextContent !== ''"
      class="disposition-item"
      v-html="abbreviatize(messageTextContent)"
    />
    <slot />
  </div>
</template>

<script lang="ts">
  import Vue, { PropOptions } from 'vue'
  import {
    abbreviatize,
    IAbbreviatize,
    IAlertType,
    IStyleMapAlert,
    styleMapAlert,
  } from '~/lib'
  export interface Data {
    messageTextContent: string
    titleTextContent: string
  }
  export interface Methods {
    abbreviatize: IAbbreviatize
  }
  export interface Computed {
    styleMap: IStyleMapAlert
  }
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
      return {
        messageTextContent,
        titleTextContent,
      }
    },
    computed: {
      styleMap(): IStyleMapAlert {
        const alertType: IAlertType = this.alertType
        const map = styleMapAlert(alertType)
        return map
      },
    },
    methods: {
      abbreviatize,
    },
  })
</script>
