// .storybook/webpack.config.js

// extension of storybook's webpack config, per:
// https://storybook.js.org/configurations/custom-webpack-config/#extend-mode

const path = require('path')
const glob = require('glob')

const extensionRules = require('../webpack-extensions')

module.exports = {
  module: {
    rules: extensionRules,
  },
}
