import webpack from 'webpack'
import webpackCommon from './webpack.common'

const validate = require('webpack-validator')
const merge = require('webpack-merge')

module.exports = () => {
  return validate(merge(webpackCommon, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      stats: 'minimal'
    },
    devtool: 'eval',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }))
}
