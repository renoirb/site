<script lang="ts">
  import Vue from 'vue'
  import NuxtPageTagIndex, {
    Data,
    Methods,
    Computed,
    Props,
  } from '../tag/index.vue'
  import { nuxtPageAsyncDataForTaxonomyIndex } from '~/lib'
  export default Vue.extend<Data, Methods, Computed, Props>({
    extends: NuxtPageTagIndex,
    async asyncData(ctx) {
      const data = await nuxtPageAsyncDataForTaxonomyIndex(
        'categories',
        'category',
        ctx,
      )
      return data
    },
    data() {
      return {
        urlParam: 'category',
        title: 'All categories',
        items: [],
      }
    },
  })
</script>
