<template>
  <section class="pages__projects--parent">
    <div
      class="pages__projects--parent justify-items-stretch sm:grid-cols-2 sm:grid-flow-row md:grid-flow-col-dense grid grid-cols-1 gap-4 mb-6"
    >
      <app-bread-crumb
        v-if="!!$route && $route.params && $route.matched"
        :route="$route"
      />
    </div>
    <div class="pages-blog--parent--bottom">
      <nuxt-child />
    </div>
  </section>
</template>
