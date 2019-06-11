<template>
    <section>
      <h3>{{ slug }}</h3>
    </section>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BlogItem extends Vue {
  @Prop(String) slug: string = ''

  mounted() {
    console.log('mounted', this)
  }

  async asyncData({ app, params, error }) {
    const where = this.slug
    console.log('asyncData', { where })
    try {
      const { data } = await app.$axios.get(where)
      return data
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>
