<template>
  <div>
    <nuxt-link to="/blog">Blog</nuxt-link>
    <nuxt-link :to="`/blog/${$route.params.year}`">{{
      $route.params.year
    }}</nuxt-link>
    <div>
      <nuxt-child class="pages-blog-year-month--parent" />
    </div>
  </div>
</template>
