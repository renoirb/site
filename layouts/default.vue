<template>
  <el-container>
    <el-header>
      <slot name="header">
        <DefaultHeader />
      </slot>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer>
      <slot name="footer">
        <DefaultFooter />
      </slot>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component({
  components: {
    DefaultHeader: () => import('~/components/layout/DefaultHeader.vue'),
    DefaultFooter: () => import('~/components/layout/DefaultFooter.vue'),
  },
})
export default class DefaultLayout extends Vue {
  header: boolean = true
  footer: boolean = true
}
</script>

