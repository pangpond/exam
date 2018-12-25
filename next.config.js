const Uglify = require('uglifyjs-webpack-plugin')
require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
      '/register': { page: '/register' },
    }
  },

  webpack(cfg) {
    cfg.plugins = cfg.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin')

    cfg.plugins.push(new Uglify({
      parallel: true,
      sourceMap: true,
    }))

    cfg.plugins.push(new Dotenv({
      path: path.join(__dirname, '.env'),
      systemvars: true,
    }))
    return cfg
  },
}
