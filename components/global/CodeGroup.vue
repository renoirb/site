<template>
  <div class="code-group">
    <div
      class="rounded-t-md relative px-2 pb-0 -mb-2 text-sm text-white bg-gray-800 border-b-2 border-gray-700"
    >
      <button
        v-for="({ label }, i) in tabs"
        ref="tabs"
        :key="label"
        class="px-4 py-3 font-mono font-bold text-gray-400"
        :class="[activeTabIndex === i && 'active']"
        @click="updateTabs(i)"
      >
        {{ label }}
      </button>
      <span ref="highlight-underline" class="highlight-underline" />
    </div>
    <slot />
  </div>
</template>

<script>
  import Vue from 'vue'
  /**
   * Bookmark:
   * - https://github.com/nuxt/content/blob/%40nuxt/content-theme-docs%400.6.0/packages/theme-docs/src/components/global/base/CodeGroup.vue
   */
  export default Vue.extend({
    name: 'CodeGroup' /* code-group */,
    data() {
      return {
        tabs: [],
        activeTabIndex: 0,
      }
    },
    watch: {
      activeTabIndex(newValue) {
        this.switchTab(newValue)
      },
    },
    mounted() {
      this.tabs = this.$slots.default
        .filter((slot) => Boolean(slot.componentOptions))
        .map((slot) => {
          return {
            label: slot.componentOptions.propsData.label,
            elm: slot.elm,
          }
        })
      this.$nextTick(this.updateHighlighteUnderlinePosition)
    },
    methods: {
      switchTab(i) {
        this.tabs.map((tab) => {
          tab.elm.classList.remove('active')
        })
        this.tabs[i].elm.classList.add('active')
      },
      updateTabs(i) {
        this.activeTabIndex = i
        this.updateHighlighteUnderlinePosition()
      },
      updateHighlighteUnderlinePosition() {
        const activeTab = this.$refs.tabs[this.activeTabIndex]
        if (!activeTab) {
          return
        }
        const highlightUnderline = this.$refs['highlight-underline']
        highlightUnderline.style.left = `${activeTab.offsetLeft}px`
        highlightUnderline.style.width = `${activeTab.clientWidth}px`
      },
    },
  })
</script>

<style scoped>
  button {
    outline: none;
  }

  .highlight-underline {
    @apply bg-primary-500 absolute;
    bottom: -2px;
    height: 2px;
    transition: left 150ms, width 150ms;
  }

  /*
  .code-group :v-deep {
    & pre[class*='language-'] {
      @apply rounded-t-none mt-0;
    }
  }
  */
</style>