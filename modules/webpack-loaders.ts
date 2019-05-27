export default function() {
  // Nuxt resolves .csv extension
  // @ts-ignore
  this.nuxt.options.extensions.push('csv')

  // Extend webpack build
  // @ts-ignore
  this.extendBuild(config => {
    // Add csv-loader to import .csv
    // Depends on papaparse
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'csv-loader',
    })

    // Webpack resolves .ts extension
    if (!config.resolve.extensions.includes('.csv')) {
      config.resolve.extensions.push('.csv')
    }
  })
}
