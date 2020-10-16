module.exports = {
  '**/*.{yml,yaml,js,ts,md,ts,json,vue}': [
    'use-cross-env prettier --ignore-path .prettierignore --ignore-unknown --write',
  ],
  '*.{scss,css,vue}': ['yarn run lint:style'],
  '*.{ts,tsx,js,vue}': [
    'use-cross-env conventions-use-eslint --fix --ext .ts,.tsx,.js,.vue --ignore-path .gitignore --ignore-pattern "static/**/*.js"',
  ],
  'package.json': ['yarn run fix:sort-package-json'],
  '**/*.xml': ['use-cross-env prettier --write'],
}
