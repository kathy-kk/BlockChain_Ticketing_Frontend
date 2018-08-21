/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const common = require('./webpack.common.js')

const plugins = [
  new CopyWebpackPlugin([
    {
      from: 'statics',
      to: 'statics',
    },
  ]),
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
