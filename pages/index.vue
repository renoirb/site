<template>
  <div class="pages__index--parent">
    <div class="container mx-auto">
      <div class="flex flex-col w-full text-center">
        <h1 class="mb-1 font-serif text-xl italic">
          Renoir Boulanger’s upcoming site <small>Work in progress</small>
        </h1>
        <p class="lg:w-2/3 mx-auto text-base leading-relaxed">
          It’s been more than ten years that I haven't touched my site and I
          want to make-use of my skills working with Vue.js and modern Front End
          of the last years back to my own profit.
        </p>
        <nuxt-link
          to="/blog/2020/09/porting-all-my-content"
          class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 px-4 py-2 mx-10 my-4 font-semibold text-white rounded"
        >
          Continue reading...
        </nuxt-link>
      </div>
    </div>
    <ul class="mt-20">
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
    <nuxt-link class="sr-only" to="/kitchen-sink">Kitchen sink</nuxt-link>
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
