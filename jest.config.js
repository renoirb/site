const { pathsToModuleNameMapper } = require('ts-jest/utils')

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):
const { compilerOptions } = require('./tsconfig')

/**
 * See other nicely done configs:
 * - https://github.com/chymz/nuxt-starter/blob/7ecd808/package.json#L83
 * - https://github.com/nuxt-community/hackernews-nuxt-ts
 * - https://kulshekhar.github.io/ts-jest/user/config/
 */
const main = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/lib/**/*.[tj]s',
  ],
  globals: {
    'ts-jest': {
      diagnostics: true,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'vue', 'json'],
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  snapshotSerializers: ['jest-serializer-vue'],
  transform: {
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]sx?$',
}

module.exports = main
