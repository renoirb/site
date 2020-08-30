module.exports = {
  '**/*.{js,ts,md,ts,json,vue}': [
    'use-cross-env prettier --ignore-path .prettierignore --ignore-unknown --write',
    'git add -f ',
  ],
  '*.{scss,css,vue}': ['yarn run lint:style', 'git add'],
  '*.{ts,tsx,js,vue}': [
    'use-cross-env conventions-use-eslint --fix --ext .ts,.tsx,.js,.vue --ignore-path .gitignore',
    'git add -f ',
  ],
  'package.json': ['yarn run fix:sort-package-json', 'git add'],
}
