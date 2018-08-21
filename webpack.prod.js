/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const common = require('./webpack.common.js')

const plugins = [
]

const optimization = {
  splitChunks: {
    chunks: 'all',
  },
  minimizer: [
    new UglifyJsPlugin(),
  ],
}

module.exports = merge(common, {
  mode: 'production',
  optimization,
  plugins,
  stats: {
    warnings: false,
  },
})
