<template>
  <div class="pages--blog-_year-_month-_slug-index">
    <h3>{{ this.$route.name }}</h3>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BlogYearMonthDaySlugPage extends Vue {
  mounted() {
    const { props = {} } = this.$route as any
    console.log('mounted', JSON.parse(JSON.stringify(props)))
  }
}
</script>
