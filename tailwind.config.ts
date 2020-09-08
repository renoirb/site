// import * as defaultTheme from 'tailwindcss/defaultTheme'
// import { tailwindThemeExtend } from './lib/runtime/tailwind'

// export const theme = {
//   // ...defaultTheme,
//   backgroundColor: '#F4F7F3',
//   extend: {
//     fontFamily: {
//       title: ['Satisfy', 'serif'],
//     },
//     //  ...tailwindThemeExtend,
//   },
// }

export const future = {
  removeDeprecatedGapUtilities: true,
  purgeLayersByDefault: true,
}

export const purge = {
  mode: 'layers',
  // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  enabled: true,
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.ts',
    'nuxt.config.ts',
  ],
}
