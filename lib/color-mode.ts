import { Context } from '@nuxt/types'

export const fromColorModeToClassName = (colorModeObj: {
  value: 'dark'
}): 'dark-mode' | 'light-mode' => {
  return colorModeObj?.value === 'dark' ? 'dark-mode' : 'light-mode'
}

export const getColorModeClassName = (ctx: Context): string => {
  const out = fromColorModeToClassName(ctx.app.$colorMode)
  return out
}
