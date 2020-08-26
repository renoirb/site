module.exports = {
  '*.{scss,css,vue}': ['yarn run lint:style'],
  '*.{ts,tsx,js,vue}': ['yarn run lint'],
  '*.{md,json,js,ts}': [
    'yarn run fix',
    'git add',
  ],
  'package.json': ['yarn run fix:sort-package-json', 'git add'],
}
