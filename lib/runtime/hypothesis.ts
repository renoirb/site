import type { ScriptPropertyBase } from 'vue-meta'

export const createVueMetaHeadScriptForHypothesis = (): ScriptPropertyBase => ({
  // <script src="https://hypothes.is/embed.js" async></script>
  src: 'https://hypothes.is/embed.js',
  vmid: 'hypothes-is-embed',
  async: true,
  skip: true,
  callback: (e) => {
    const { remove, ownerDocument } = e
    const { hostname = 'bogus' } = ownerDocument?.location
    const isAcceptableOrigin = /(localhost|renoirboulanger\.com)/.test(hostname)
    if (!isAcceptableOrigin) {
      remove?.()
    }
  },
})
