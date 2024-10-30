
/**
 * @typedef {Object} RouteComponent
 * @property {string} path - Route path pattern
 * @property {Object} regex - Regular expression matchers
 * @property {Object} components - Route components
 * @property {Object} instances - Component instances
 * @property {string} name - Route name
 * @property {Object} meta - Route metadata
 * @property {Object} props - Route properties
 */

/**
 * @typedef {Object} RouteObject
 * @property {string} name - Name identifier for the route
 * @property {Object} meta - Metadata associated with the route
 * @property {string} path - Raw path string
 * @property {string} hash - URL hash fragment
 * @property {Object} query - Query parameters
 * @property {Object} params - Route parameters
 * @property {string} params.pathMatch - Matched path string
 * @property {string} fullPath - Complete path including parameters
 * @property {RouteComponent[]} matched - Array of matched route components
 */

/**
 * Something to do when Vue router navigates.
 *
 * I had an idea about this, but I forgotten it.
 * Probably something to do with external links and white list.
 *
 * @param {RouteObject} _r
 */
const onNavigateVueRouteChange = (_r) => {
  const { path = '' } = _r
  console.log(`navigated to ${path}\n`, _r)
}


/**
 * Things to do client-side with links.
 *
 * @param {WindowProxy} w
 */
const main = (w) => {
  const { console, location } = w

  /**
   * Handle click on anchor, but only for external links.
   * That should be separate from Vue's Router events.
   *
   * @param {MouseEvent} _evt
   */
  const onNavigateNativeAnchor = (_evt) => {
    if (_evt.target.tagName !== 'A') {
      return
    }
    if (Reflect.has(_evt.target, '__vue__')) {
      // Do nothing when it's Vue, let's use onNavigateVueRouteChange
      return
    }
    const _href = _evt.target.getAttribute('href')
    // console.log(`onNavigateNativeAnchor\n`, { href: _href, target: _evt.target })
  }

  /**
   *
   * @param {HTMLAnchorElement} a
   */
  const maybeAppendSlash = (a) => {
    const href = a.getAttribute('href')
    if (/\/$/.test(href) === false) {
      a.setAttribute('href', href + '/')
    }
  }

  /**
   * When not on renoirboulanger.com, show the canonical link.
   *
   * @param {HTMLAnchorElement} a
   */
  const unHideCanonicalLinkOnNonProduction = (a) => {
    if (/^renoirboulanger\.com/.test(location.hostname)) {
      // Hostname is renoirboulanger.com therefore it is production
      return;
    }
    const href = a.getAttribute('href')
    if (
      href.startsWith('https://renoirboulanger.com') &&
      a.classList.contains('canonical-link')
    ) {
      a.classList.remove('hidden')
    }
  }

  const forEachAnchorElements = (e) => {
    maybeAppendSlash(e)
    unHideCanonicalLinkOnNonProduction(e)
  }
  [...w.document.querySelectorAll('a')].forEach((a) => forEachAnchorElements(a))

  /** ---------------------------------------------------------------------- */

  /**
   * https://stackoverflow.com/questions/46402809/vuejs-event-on-route-change
   *
   * $router.history.listen((newLocation) => {console.log(newLocation);})
   */
  if (Reflect.has(w, '__nuxt') === true) {
    const history = w.__nuxt.__vue__._router.history
    if (history) {
      history.listen(onNavigateVueRouteChange)
    }
  }

  w.document.addEventListener('click', onNavigateNativeAnchor);

}

export default main
