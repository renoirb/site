<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        renoirb-site
      </h1>
      <section>
        <h3>Articles</h3>
        <ul>
          <li v-for="post in posts" :key="post.slug">
            {{ post.slug }}
          </li>
        </ul>
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
import { Component, Vue, State } from 'nuxt-property-decorator'
import { Post } from '~/types'

@Component({
  components: {
    Logo: () => import('~/components/Logo.vue')
  }
})
export default class extends Vue {
  @State posts!: Post[]
}
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
