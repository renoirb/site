const base = require('@renoirb/conventions-use-eslint')

module.exports = {
  ...base,
  rules: {
    // See comments in @renoirb/tools-bundling-helpers .eslintrc.js
    // https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo/blob/master/conventions/use-eslint/.eslintrc.js
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}
