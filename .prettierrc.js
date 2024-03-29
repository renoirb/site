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
    {
      files: '*.md',
      options: {
        proseWrap: 'always',
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      options: {
        proseWrap: 'always',
      },
    },
    {
      files: ['*.svg'],
      options: {
        proseWrap: 'always',
      },
    },
    {
      // https://github.com/prettier/plugin-xml
      files: ['*.xml', '*.doc'],
      options: {
        bracketSameLine: false,
        singleAttributePerLine: true,
        useTabs: true,
      },
    },
  ],
}

module.exports = main
