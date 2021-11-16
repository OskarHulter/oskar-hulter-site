/*
module.exports = {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
}
*/

// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextra = require('nextra')({
  unstable_staticImage: true
})
module.exports = withNextra()