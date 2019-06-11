<template>
  <!--
  * Nuxt Nested Routes:
  * Basically a way to make pages in folder of same name to be sub-pages.
  * https://nuxtjs.org/guide/routing#nested-routes
  -->
  <nuxt-child :key="$route.fullPath" />
</template>
