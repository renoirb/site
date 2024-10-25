const classNameMap = new Map([
  ['insertBg', 'bg-green-200'],
  ['deleteBg', 'bg-red-200'],
  ['rounded', 'rounded'],
  ['insertIndicator', 'bg-green-500'],
  ['deleteIndicator', 'bg-red-500'],
  ['indicator', 'inline-block w-3 h-3 rounded cursor-pointer'],
  [
    'tooltip',
    'absolute z-10 p-2 bg-gray-800 text-white text-xs rounded shadow-lg transition-opacity duration-300',
  ],
  ['tooltipHidden', 'opacity-0 invisible -translate-y-2'],
  ['tooltipVisible', 'opacity-100 visible translate-y-0'],
])


const FALLBACK_TAILIND_DEPENDENCY = '<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">'
/**
 * Tailwind has many CSS variables, but none has its name in it. So we need to check for a specific one.
 */
const TAILWIND_CSS_CUSTOM_PROPERTY = '--color-primary'


/**
 * Check the current host document for a CSS variable that is set by TailwindCSS
 *
 * @example
 * ```js
 * window.getComputedStyle(document.body).getPropertyValue('--color-primary')
 * ```
 *
 * Bookmarks:
 * - https://broken-links.com/2014/08/28/css-variables-updating-custom-properties-javascript/
 *
 * @param {Document} hostDocument
 * @returns {string}
 */
const checkDependencyExistence = (hostDocument) => {
  let hasTailindEmptyCssVar = ''
  let out = ''
  try {
    const maybe = hostDocument.defaultView.getComputedStyle(hostDocument.body).getPropertyValue(TAILWIND_CSS_CUSTOM_PROPERTY)
    hasTailindEmptyCssVar = maybe
  } catch (_e) {
    // Ok
  }
  /**
   * This is meant to check for existence for a CSS variable that's used by Tailwind.
   *
   * But after 2h finagling around, when not adding Tailwind dependency, despite the fact that it's
   * there, the component doesn't style.
   *
   * So we'll probably have to load all the host document's link[rel=stylesheet] into this shadow DOM.
   *
   * rel=#75
   *
   * https://github.com/renoirb/site/issues/75
   *
   */
  hasTailindEmptyCssVar = '' // For now, we'll just force it to load the fallback.
  if (hasTailindEmptyCssVar === '') {
    out = FALLBACK_TAILIND_DEPENDENCY
  }

  return out
}

class ContentEdit extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.debounceDelay = 100 // ms
    this.minDisplayTime = 300 // ms
    this.showTimeout = null
    this.hideTimeout = null
    this.lastShowTime = 0
    this.maybeCssDependency = ''
  }

  connectedCallback() {
    this.maybeCssDependency = checkDependencyExistence(this.ownerDocument)

    let type = this.getAttribute('type') || 'ins'
    const date = this.getAttribute('date')
    const hasComment = this.querySelector('[slot="comment"]')

    if (type !== 'ins' && type !== 'del') {
      type = 'ins'
      const message = `For <${this.tagName.toLowerCase} type="..."> element, only "ins" and "del" are supported, defaulting to "ins".`
      console.warn(message)
    }

    const mainContent = document.createElement('span')
    mainContent.innerHTML = this.innerHTML
    const commentSlot = mainContent.querySelector('[slot="comment"]')
    if (commentSlot) {
      mainContent.removeChild(commentSlot)
    }

    const bgClass =
      type === 'ins'
        ? classNameMap.get('insertBg')
        : classNameMap.get('deleteBg')
    const indicatorClass =
      type === 'ins'
        ? classNameMap.get('insertIndicator')
        : classNameMap.get('deleteIndicator')

    let html = `
            <${type} class="px-1 ${bgClass} ${classNameMap.get('rounded')}">
                ${mainContent.innerHTML}
            </${type}>
        `

    if (date || hasComment) {
      html += `
                <span class="relative inline-block ml-1">
                    <span class="${classNameMap.get(
                      'indicator',
                    )} ${indicatorClass}" id="trigger"></span>
                    <div class="${classNameMap.get(
                      'tooltip',
                    )} ${classNameMap.get(
        'tooltipHidden',
      )} left-1/2 transform -translate-x-1/2" style="min-width: 120px; bottom: 100%;" id="tooltip">
                        ${date ? `<div>Date: ${date}</div>` : ''}
                        ${
                          hasComment
                            ? '<div>Comment: <slot name="comment"></slot></div>'
                            : ''
                        }
                    </div>
                </span>
            `
    }

    this.shadowRoot.innerHTML = `
            ${this.maybeCssDependency}
            ${html}
        `

    if (date || hasComment) {
      const trigger = this.shadowRoot.getElementById('trigger')
      const tooltip = this.shadowRoot.getElementById('tooltip')

      trigger.addEventListener('mouseenter', () => this.debounceShow(tooltip))
      trigger.addEventListener('mouseleave', () => this.debounceHide(tooltip))
    }
  }

  debounceShow(tooltip) {
    clearTimeout(this.hideTimeout)
    clearTimeout(this.showTimeout)

    this.showTimeout = setTimeout(() => {
      this.showTooltip(tooltip)
    }, this.debounceDelay)
  }

  debounceHide(tooltip) {
    clearTimeout(this.showTimeout)
    clearTimeout(this.hideTimeout)

    const timeShown = Date.now() - this.lastShowTime
    const remainingTime = Math.max(0, this.minDisplayTime - timeShown)

    this.hideTimeout = setTimeout(() => {
      this.hideTooltip(tooltip)
    }, remainingTime)
  }

  showTooltip(tooltip) {
    tooltip.classList.remove(...classNameMap.get('tooltipHidden').split(' '))
    tooltip.classList.add(...classNameMap.get('tooltipVisible').split(' '))
    this.lastShowTime = Date.now()
  }

  hideTooltip(tooltip) {
    tooltip.classList.remove(...classNameMap.get('tooltipVisible').split(' '))
    tooltip.classList.add(...classNameMap.get('tooltipHidden').split(' '))
  }
}

export default ContentEdit
