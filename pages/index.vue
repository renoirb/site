<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        renoirb-site
      </h1>
      <section>
        <nuxt-link to="/blog">Blog</nuxt-link>
      </section>
      <div class="links">
        <h3>Element UI imported stuff</h3>
        <el-button>Hi</el-button>
        <el-date-picker type="datetime" placeholder="Select date and time" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  components: {
    Logo: () => import('~/components/Logo.vue'),
  },
})
export default class Index extends Vue {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
