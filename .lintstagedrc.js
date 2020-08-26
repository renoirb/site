module.exports = {
  '*.{js,ts}': [
    'use-cross-env conventions-code-formatter prettier "*.{js,ts}" --ignore-unknown --write',
    'git add',
  ],
  '*.{scss,css,vue}': ['yarn run lint:style', 'git add'],
  '*.{ts,tsx,js,vue}': [
    'use-cross-env conventions-use-eslint --fix --ext .ts,.tsx,.js,.vue --ignore-path .gitignore',
    'git add',
  ],
  '*.{md,json,js,ts}': [
    'use-cross-env prettier --config node_modules/@renoirb/conventions-use-prettier/prettier.config.js --ignore-unknown --write',
    'git add',
  ],
  'package.json': ['yarn run fix:sort-package-json', 'git add'],
}
