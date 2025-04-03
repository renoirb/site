/**
 * RenoirBoulanger.com client-side boostraptator. thing.
 *
 * Load custom elements we'll use in this site, should we want to
 * change how they're displayed or function, instead of having to
 * change all the content pages, we can instead simply change
 * the implementation we'll use to replace it.
 *
 * rel=#WIP-Mingle-CustomElements-From-ESM-Modules
 */

import { registerCustomElement } from 'https://renoirb.com/esm-modules/element-utils.mjs'

const ELEMENTS = [
  ['rb-notice-box', import('https://renoirb.com/esm-modules/notice-box-element.mjs')],
]

const main = async ({ SITE_ROOT_BASE_URL = './' }) => {
  await Promise.resolve()

  ELEMENTS.push(
    ['rb-content-edit', import(`${SITE_ROOT_BASE_URL}esm-modules/element-content-edit/0.1.0/index.mjs`)],
  )

  const loaded = []
  const errored = []

  ELEMENTS.forEach(async ([elementName, importator]) => {
    const closature = await importator
    try {
      registerCustomElement(window, elementName, closature.default)
      loaded.push(elementName)
    } catch {
      const message = `Element ${elementName} is already loaded`
      console.warn(message)
      errored.push(elementName)
    }
  })

  return {
    loaded,
    errored,
  }
}

export default main
