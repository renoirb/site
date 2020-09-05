<template>
  <div class="flex items-stretch justify-center mb-4">
    <div
      class="sm:self-start md:self-end lg:self-center xl:self-stretch self-auto px-4 py-2 m-2"
    >
      <nuxt />
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@nuxtjs/composition-api'
  export interface Data {}
  export interface Props {}
  export default defineComponent<Props, Data>({})
</script>
