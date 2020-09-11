/**
 * Color palettes tools:
 * - https://tailwind-colors.meidev.co/
 * - https://coolors.co/0d0a0b-2e3338-f3eff5-a77e58-ba3f1d
 * - https://colors.lol/compulsive
 * - https://hihayk.github.io/scale/#2/3/71/58/33/53/19/24/BB3F3F/13/10/11/white
 */

/**
 * The customization colors map
 */
export type ITailwindColors = Record<
  string,
  string | Record<number | string, string>
>

export interface ITailwindThemeExtend {
  colors: ITailwindColors
}

/**
 * Theme definition
 * This is incomplete, only covering what we're changing
 *
 * Bookmarks:
 * - https://tailwindcss.com/docs/theme
 */
export interface ITailwindThemeRoot {
  [key: string]: string | ITailwindThemeExtend
}

/**
 * Grossly simplified description of TailwindCSS schema
 */
export interface ITailwindThemeConfig {
  theme: ITailwindThemeRoot
  variants?: Record<string, string[]>
}

export const tailwindThemeExtend: ITailwindThemeExtend = {
  colors: {
    secondary: '#BB3F3F',
    tertiary: '#CB7723',
    primary: '#214761' /* #5E8A8F */,
    body: '#ececec',
    backdrop: {
      100: '#F4F7F3',
      200: '#E5E5E5',
    },
  },
}
