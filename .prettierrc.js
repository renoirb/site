const base = require('@renoirb/conventions-use-prettier/prettier.config')

const main = {
  ...base,
  overrides: [
    {
      files: '*.vue',
      options: {
        parser: 'vue',
        vueIndentScriptAndStyle: true,
        trailingComma: 'all',
      },
    },
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
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
