<template>
  <div class="pages__blog__year__month--parent">
    <nuxt-child :key="$route.params.year + '--' + $route.params.month" />
  </div>
</template>
