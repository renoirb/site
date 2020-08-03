module.exports = {
  '*.{scss,css,vue}': ['use-cross-env stylelint'],
  '*.{js,vue}': ['use-cross-env eslint'],
  '*.{md,json,js,ts}': [
    'use-cross-env use-prettier "**/*.{md,json,js,ts}" --write',
    'git add',
  ],
  'package.json': ['npx sort-package-json', 'git add'],
}
