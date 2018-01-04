// next.config.js

// extension of next.js' webpack config, per:
// https://github.com/zeit/next.js/#customizing-webpack-config

// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

// Current config is to support a Global Stylesheet, per
// https://github.com/zeit/next.js/blob/v3-beta/examples/with-global-stylesheet/next.config.js

// The actual loaders live in ./webpack-extensions.js
// so that they can be shared with .storybook/webpack.config.js

const path = require('path')
const glob = require('glob')

const extensionRules = require('./webpack-extensions')

module.exports = {
  webpack: (config, { dev }) => {
    // any next.js specific rules can be pushed in here
    // NOTE: ORDER matters
    //       the emit-file-loader must be pushed before the rules in webpack-extension.js are pushed
    config.module.rules.push({
      test: /\.(css|scss)/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]',
      },
    })
    // each rule in the shared webpack-extension.js will be pulled in here
    extensionRules.forEach(rule => config.module.rules.push(rule))
    return config
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/register': { page: '/register' },
    }
  },
}
