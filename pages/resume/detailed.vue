<script lang="ts">
  import Vue from 'vue'
  export interface Data {}
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    layout: 'blank',
    asyncData({ redirect, route }) {
      const fullPath = route.fullPath.split('/')
      fullPath.pop()
      const rewritten = fullPath.join('/')
      return redirect(rewritten)
    },
  })
</script>
