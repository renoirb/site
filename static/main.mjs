
/**
 * This should work for file:/// URLs
 * (assuming it's supported, Safari does, not Chromium thus far 2023-02-03)
 */
const SITE_ROOT_BASE_URL = await import.meta.url?.replace('main.mjs', '')

const forEachFn = (e) => {
  let href = e.getAttribute('href')
  if (/\/$/.test(href) === false) {
    e.setAttribute('href', href + '/')
  }
  href = e.getAttribute('href')
  const textContent = e.textContent.trim()
  console.log(textContent, { href })
}
// [...document.querySelectorAll('a')].forEach((a) => forEachFn(a))

const main = async () => {
  await Promise.resolve()
  try {
    // Things should display regardless of whether all elements are registered. Just less pretty.
    const { default: registerElements } = await import('./assets/js/register-elements.mjs')
    await registerElements({ SITE_ROOT_BASE_URL })
  } catch (_e) {
    const message = `We could not load our elements from ./assets/js/register-elements.mjs, let's fail gracefully. Error message: ` + _e
    console.warn(message)
  }
  const { default: linkManipulation } = await import('./assets/js/link-manipulation.mjs')
  linkManipulation(window)
}


// ----------------------------------------------------------------------------
main().catch(e => {
  console.error(`Something went wrong`, e)
})
