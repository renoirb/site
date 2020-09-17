<template>
  <div class="document document--item">
    <header class="title page-title">
      <h1>Style Guide</h1>
    </header>
    <div class="body">
      <div class="mb-5">
        <h2 class="mb-5">app-very-old-article</h2>
        <div>
          <app-very-old-article locale="en-UK" date="2014-01-01" />
        </div>
      </div>
      <div class="mb-5">
        <h2 class="mb-5">app-alert-box</h2>
        <div>
          <app-alert-box
            v-for="alertType of ['info', 'error', 'warn']"
            :key="alertType"
            class="mb-5"
            :alert-type="alertType"
            :title="`Alert of type: ${alertType}`"
          >
            {{ alertType }}
          </app-alert-box>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { styleMapAlert, IStyleMapAlert } from '~/lib'
  export interface Data {
    styleMap: IStyleMapAlert
  }
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    asyncData() {
      // Let's make the styleguide to have ALL CSS classes.
      // ... see for now.
      const styleMap = styleMapAlert('error', true)
      return {
        styleMap,
      }
    },
  })
</script>
