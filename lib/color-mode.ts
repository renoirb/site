import { Context } from '@nuxt/types'

export const getColorModeClassName = (ctx: Context): string => {
  const colorMode = ctx.app.$colorMode.value
  const colorModeClassName = `${colorMode || 'light'}-mode`
  console.log('colorModeClassName', { colorModeClassName, colorMode })
  return colorModeClassName
}

export const getColorModeFromElement = ($el: Element): string => {
  if ('ownerDocument' in $el === false) {
    const message = `Invalid argument, we expected an Element with an ownerDocument property, but received: ${$el}`
    throw new TypeError(message)
  }
  const doc = $el.ownerDocument
  const [colorMode = 'light-mode'] = [...doc.documentElement.classList].filter(
    (c) => c.endsWith('-mode'),
  )
  return colorMode
}
