/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge')
const { HotModuleReplacementPlugin } = require('webpack')

const common = require('./webpack.common.js')

const plugins = [
  new HotModuleReplacementPlugin(),
]

const devServer = {
  bonjour: true,
  compress: true,
  hot: true,
  https: false,
  historyApiFallback: true,
}

module.exports = merge(common, {
  mode: 'development',
  plugins,
  devtool: 'eval-source-map',
  devServer,
})
