<script lang="ts">
  import Vue from 'vue'
  import NuxtPageTagList, {
    Data,
    Methods,
    Computed,
    Props,
  } from '../tag/_tag.vue'
  import {
    nuxtPageAsyncDataForTaxonomyList,
    /*                       */
  } from '~/lib'
  import type {
    ITaxonomyItem,
    /*                       */
  } from '~/lib'
  export default Vue.extend<Data, Methods, Computed, Props>({
    extends: NuxtPageTagList,
    async asyncData(ctx) {
      const data = await nuxtPageAsyncDataForTaxonomyList(
        'categories',
        'category',
        ctx,
      )
      return data
    },
    data() {
      return {
        contents: [],
        urlParam: 'category',
        taxonomyKey: '',
        taxonomy: { key: '', text: '' } as ITaxonomyItem,
      }
    },
  })
</script>
