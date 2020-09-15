<template>
  <nav
    class="fixed z-10 flex items-center justify-between w-full h-16 px-6 text-gray-700 bg-white border-b border-gray-200"
  >
    <div class="flex items-center">
      <button class="md:hidden mr-2" aria-label="Open Menu" @click="drawer">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-8 h-8"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      <nuxt-link to="/">{{ appTitle }}</nuxt-link>
    </div>
    <div class="flex items-center">
      <div class="md:flex md:justify-between md:bg-transparent hidden">
        <slot />
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="transition-medium ease-out"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="transition-medium ease-out"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 z-10 transition-opacity"
        @keydown.esc="isOpen = false"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
          @click="isOpen = false"
        ></div>
      </div>
    </transition>
    <aside
      class="fixed top-0 left-0 z-30 w-64 h-full overflow-auto transition-all duration-300 ease-in-out transform bg-white"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div
        class="flex items-center w-full h-16 p-4 border-b"
        @click="isOpen = false"
      >
        <nuxt-link to="/">{{ appTitle }}</nuxt-link>
      </div>
      <nuxt-link
        v-for="({ label, to }, index) of nav"
        :key="`${label}--${index}`"
        :to="to"
        class="hover:bg-teal-500 hover:text-white flex items-center p-4"
        @click="isOpen = false"
      >
        <span class="mr-2">
          {{ label }}
        </span>
      </nuxt-link>
    </aside>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { IAppHeaderNavItems } from '~/lib'
  export interface Data {
    appTitle: string
    isOpen: boolean
  }
  export interface Methods {
    onKeyDown(evt: HTMLBodyElementEventMap['keydown']): void
    drawer(): void
  }
  export interface Computed {}
  export interface Props {
    nav: IAppHeaderNavItems[]
  }
  /**
   * Thank you fayaz for your side-bar, I'll buy you a coffee!
   *
   * Bookmarks:
   * - https://dev.to/fayaz/making-a-navigation-drawer-sliding-sidebar-with-tailwindcss-blueprint-581l
   * - https://github.com/fayazara/tailwind-components/blob/6b8bf8f4/components/navbar.vue
   */
  export default Vue.extend<Data, Methods, Computed, Props>({
    props: {
      nav: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      // TODO: Make sure we get Nuxt context properly (below instead of ts-ignore--ing)
      // @ts-ignore
      const { context = {} } = this.$root || {}
      let appTitle = ''
      if (context && context.app && context.app.head) {
        appTitle = context.app.head.title
      }
      return {
        appTitle,
        isOpen: false,
      }
    },
    watch: {
      isOpen: {
        immediate: true,
        handler(isOpen) {
          if (process.client) {
            if (this.$el) {
              const body = this.$el.querySelector('body')
              if (body) {
                if (isOpen) {
                  body.style.setProperty('overflow', 'hidden')
                } else {
                  body.style.removeProperty('overflow')
                }
              }
            }
          }
        },
      },
    },
    mounted() {
      if (this.$el) {
        const ownerDocument = this.$el.ownerDocument
        if (ownerDocument) {
          ownerDocument.body.addEventListener('keydown', this.onKeyDown)
        }
      }
    },
    beforeDestroy() {
      if (this.$el) {
        const ownerDocument = this.$el.ownerDocument
        if (ownerDocument) {
          ownerDocument.body.removeEventListener('keydown', this.onKeyDown)
        }
      }
    },
    methods: {
      drawer() {
        this.isOpen = !this.isOpen
      },
      onKeyDown(evt: HTMLBodyElementEventMap['keydown']) {
        if (evt.keyCode === 27 && this.isOpen) {
          this.isOpen = false
        }
      },
    },
  })
</script>
