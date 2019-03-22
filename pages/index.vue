<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        renoirb-site
      </h1>
      <h2 class="subtitle">
        Renoir Boulanger&#39;s WebSites
      </h2>
      <div class="links">
        <el-button>Hi</el-button>
        <el-date-picker type="datetime" placeholder="Select date and time">
        </el-date-picker>
      </div>
    </div>
  </section>
</template>

<script>
const Logo = () => import('~/components/Logo.vue')

export default {
  components: {
    Logo,
  },
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
