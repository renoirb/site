const base = require('@renoirb/conventions-use-prettier/prettier.config')

const main = {
  ...base,
  overrides: [
    {
      files: '*.vue',
      options: {
        parser: 'vue',
        vueIndentScriptAndStyle: true,
      },
    },
  ],
}

module.exports = main
