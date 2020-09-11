/**
 * TailwindCSS Configuration File
 *
 * Docs: https://tailwindcss.com/docs/configuration
 * Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 *
 * (Temporarily) copy-paste from:
 * - https://github.com/nuxt/content/blob/83b13f58/docs/nuxt.config.js#L3
 * - https://github.com/nuxt/content/blob/83b13f58/packages/theme-docs/src/index.js
 *
 * TODO:
 * - fontFamily: Roboto
 *   variant: light
 *   size:
 *   - body: 14
 *   - accent: 36
 *   - nav: 18
 *
 * - fontFamily: Georgia
 *   variant: normal
 *   size:
 *   - h1: 24
 *   - h2: 18
 *   - body: 14
 *   - excerpt: 12
 */

const path = require('path')
const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')
const selectorParser = require('postcss-selector-parser')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      backgroundColor: '#F4F7F3',
      fontFamily: {
        body: ['Roboto', ...defaultTheme.fontFamily.sans],
        mono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        secondary: '#BB3F3F',
        tertiary: '#CB7723',
        primary: {
          100: '#DBE5DE',
          200: '#99B3A7',
          300: '#577F79' /* color */,
          400: '#16444B',
          500: '#0A2A25',
          600: '#092622',
          700: '#0A2A25',
          800: '#081F1C',
          900: '#214761' /* primary */,
          910: '#061A17',
        },
        backdrop: {
          100: '#F4F7F3',
          200: '#E5E5E5',
        },
      },
      maxHeight: {
        '(screen-16)': 'calc(100vh - 4rem)',
      },
      inset: {
        16: '4rem',
      },
      transitionProperty: {
        padding: 'padding',
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          a: {
            color: theme('colors.primary.500'),
          },
          h2: {
            paddingBottom: theme('padding.2'),
            borderBottomWidth: '1px',
            borderBottomColor: theme('colors.gray.200'),
          },
          h3: {
            paddingBottom: theme('padding.2'),
            borderBottomWidth: '1px',
            borderBottomColor: theme('colors.gray.200'),
          },
          blockquote: {
            fontWeight: '400',
            color: theme('colors.gray.600'),
            fontStyle: 'normal',
            quotes: '"\\201C""\\201D""\\2018""\\2019"',
          },
          'blockquote p:first-of-type::before': {
            content: '',
          },
          'blockquote p:last-of-type::after': {
            content: '',
          },
          code: {
            fontWeight: '400',
            backgroundColor: theme('colors.gray.100'),
            padding: theme('padding.1'),
            borderWidth: 1,
            borderColor: theme('colors.gray.200'),
            borderRadius: theme('borderRadius.default'),
          },
          'code::before': {
            content: '',
          },
          'code::after': {
            content: '',
          },
          'h3 code': {
            fontWeight: '600',
          },
          'pre code': {
            fontFamily: 'Roboto Mono',
          },
        },
      },
      dark: {
        css: {
          color: theme('colors.gray.300'),
          '[class~="lead"]': {
            color: theme('colors.gray.300'),
          },
          a: {
            color: theme('colors.primary.500'),
          },
          strong: {
            color: theme('colors.gray.100'),
          },
          'ol > li::before': {
            color: theme('colors.gray.400'),
          },
          'ul > li::before': {
            backgroundColor: theme('colors.gray.600'),
          },
          hr: {
            borderColor: theme('colors.gray.700'),
          },
          blockquote: {
            color: theme('colors.gray.400'),
            borderLeftColor: theme('colors.gray.700'),
          },
          h1: {
            color: theme('colors.gray.100'),
          },
          h2: {
            color: theme('colors.gray.100'),
            borderBottomColor: theme('colors.gray.800'),
          },
          h3: {
            color: theme('colors.gray.100'),
            borderBottomColor: theme('colors.gray.800'),
          },
          h4: {
            color: theme('colors.gray.100'),
          },
          'figure figcaption': {
            color: theme('colors.gray.400'),
          },
          code: {
            color: theme('colors.gray.100'),
            backgroundColor: theme('colors.gray.800'),
            borderWidth: 0,
          },
          thead: {
            color: theme('colors.gray.100'),
            borderBottomColor: theme('colors.gray.600'),
          },
          'tbody tr': {
            borderBottomColor: theme('colors.gray.700'),
          },
        },
      },
    }),
  },
  variants: {
    margin: ['responsive', 'last'],
    padding: ['responsive', 'hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus'],
    textColor: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'dark-hover',
      'dark-focus',
    ],
    borderColor: ['responsive', 'hover', 'focus', 'dark', 'dark-focus'],
    borderWidth: ['responsive', 'first', 'last'],
    typography: ['responsive', 'dark'],
  },
  plugins: [
    plugin(function ({ addVariant, prefix, e }) {
      addVariant('dark', ({ modifySelectors, separator }) => {
        modifySelectors(({ selector }) => {
          return selectorParser((selectors) => {
            selectors.walkClasses((sel) => {
              sel.value = `dark${separator}${sel.value}`
              sel.parent.insertBefore(
                sel,
                selectorParser().astSync(prefix('.dark-mode ')),
              )
            })
          }).processSync(selector)
        })
      })

      addVariant('dark-hover', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-mode .${e(`dark-hover${separator}${className}`)}:hover`
        })
      })

      addVariant('dark-focus', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark-mode .${e(`dark-focus${separator}${className}`)}:focus`
        })
      })
    }),
    require('@tailwindcss/typography'),
  ],
  purge: {
    mode: 'layers',
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      path.join(__dirname, 'components/**/*.vue'),
      path.join(__dirname, 'layouts/**/*.vue'),
      path.join(__dirname, 'pages/**/*.vue'),
      path.join(__dirname, 'plugins/**/*.ts'),
      'nuxt.config.ts',
    ],
    options: {
      whitelist: ['light-mode', 'dark-mode', 'taxonomy', 'document'],
    },
  },
}
