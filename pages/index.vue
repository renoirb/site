<template>
  <div class="pages__index--parent">
    <h1>Renoir Boulanger’s upcoming site <small>Work in progress</small></h1>
    <ul>
      <li><nuxt-link to="/blog">Blog</nuxt-link></li>
      <li><nuxt-link to="/hello">Hello</nuxt-link></li>
      <li><nuxt-link to="/ligne-editoriale">Ligne éditoriale</nuxt-link></li>
      <li><nuxt-link to="/about">About me</nuxt-link></li>
      <li>
        <nuxt-link to="/projets">
          Projets (permalink legacy to migrate from in french)
        </nuxt-link>
      </li>
      <li><nuxt-link to="/styleguide">styleguide</nuxt-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export interface Data {}
  export interface Methods {}
  export interface Computed {}
  export interface Props {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    layout: 'homepage',
  })
</script>
