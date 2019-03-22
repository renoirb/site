/**
 * See other nicely done configs:
 * - https://github.com/chymz/nuxt-starter/blob/7ecd808/package.json#L83
 */
module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
  globals: {
    __TS_CONFIG__: 'tsconfig.json',
    __TRANSFORM_HTML__: true,
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'vue', 'json'],
  testRegex: '/test/unit/.*\\.(ts|js)$',
}
