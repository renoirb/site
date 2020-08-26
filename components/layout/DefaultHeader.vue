<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  >
    <v-list
      v-if="(items||[]).length > 0"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list dense v-else>
      <v-list-item>
        Nothing
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    items: {
      type: Array,
      required: false,
      default: () => ([]),
    },
    clipped: {
      type: Boolean,
      default: false,
    },
    miniVariant: {
      type: Boolean,
      default: false,
    },
    drawer: {
      type: Boolean,
      default: false,
    },
  }
})
</script>
