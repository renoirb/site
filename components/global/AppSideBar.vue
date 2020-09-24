<template>
  <nav class="app-side-bar--component fixed w-full">
    <div
      class="zone__sandwich__top container z-20 flex items-center justify-between py-4 mx-auto"
    >
      <div class="app-side-bar__identity md:px-5 flex items-center">
        <button
          class="md:hidden ml-5 mr-2"
          aria-label="Open Menu"
          @click="drawer"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            class="w-8 h-8"
            :class="{ 'is-opened': isOpen }"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <nuxt-link
          to="/"
          class="identity__text"
          :class="{ 'is-opened': isOpen }"
        >
          {{ appTitle }}
        </nuxt-link>
      </div>
      <div class="app-side-bar__nav flex items-center">
        <div
          class="md:flex md:justify-between md:bg-transparent text-is-italicized hidden"
        >
          <slot />
        </div>
      </div>
    </div>

    <transition
      enter-class="opacity-0"
      enter-active-class="transition-medium ease-out-enter-active transition-all duration-500 ease-out"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="transition-medium ease-out-leave-active transition-all duration-500 ease-out"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        class="fixed inset-0 z-10 transition-opacity"
        @keydown.esc="isOpen = false"
      >
        <div
          class="absolute inset-0 bg-black opacity-75"
          tabindex="0"
          @click="isOpen = false"
        ></div>
      </div>
    </transition>
    <aside
      class="md:invisible app-side-bar__aside fixed top-0 left-0 z-30 visible w-64 h-full overflow-auto transition-all duration-500 ease-in-out transform"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div
        class="app-side-bar__identity flex items-center w-full h-16 p-4 border-b"
        @click="isOpen = false"
      >
        <nuxt-link to="/" class="identity__text">{{ appTitle }}</nuxt-link>
      </div>
      <div>
        <nuxt-link
          v-for="({ label, to }, index) of nav"
          :key="`${label}--${index}`"
          :to="to"
          class="hover:bg-teal-500 hover:text-white flex items-center p-4"
          @click.native="isOpen = false"
        >
          <span class="mr-2">
            {{ label }}
          </span>
        </nuxt-link>
      </div>
    </aside>
    <div style="position: relative">
      <inline-svg
        :src="require('~/assets/images/42357.svg')"
        width="500"
        height="500"
        style="
          fill: var(--color-sandwich-bg) !important;
          position: absolute;
          rotate: -80deg;
          right: -60px;
          bottom: -200px;
          z-index: -1;
        "
        class="lg:visible invisible"
      ></inline-svg>
    </div>
  </nav>
</template>

<script lang="ts">
  import Vue from 'vue'
  // @ts-ignore
  import InlineSvg from 'vue-inline-svg'
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
    name: 'AppSideBar' /* app-side-bar */,
    components: {
      InlineSvg,
    },
    props: {
      nav: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      /* @TODO Make sure we get Nuxt context properly (below instead of ts-ignore--ing) */
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
        handler(isOpen, previousValue) {
          // eslint-disable-next-line
          console.log('app-side-bar watch.isOpen', {
            value: isOpen,
            previousValue,
          })
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

<style scoped>
  .app-side-bar__nav,
  .app-side-bar__identity {
    color: var(--color-sandwich-text);
  }
  .identity__text {
    @apply text-3xl font-light;

    color: var(--color-sandwich-text);
    opacity: 1;

    &.is-opened {
      opacity: 0.1;
      transition-duration: 1s;
      transition-property: opacity;
    }
  }
  .app-side-bar__aside {
    color: var(--color-primary);
    background-color: var(--color-container);
  }
  .dark-mode .app-side-bar__aside {
    color: var(--color-sandwich-text);
  }
  .app-side-bar__aside .app-side-bar__identity {
    background-color: var(--color-sandwich-bg);
  }
  svg.is-opened {
    transform: rotate(90deg);
    transition: transform 0.5s;
    transition-delay: 2s;
  }
</style>
