const webpack = require('webpack')
const webpackCommon = require('./webpack.common')
const merge = require('webpack-merge')

module.exports = () => {
  return merge(webpackCommon, {
    module: {
      rules: [
        {
          test: /\.styl$/,
          loader: 'style-loader!css-loader!stylus-loader'
        }
      ]
    },

    devServer: {
      historyApiFallback: true,
      hot: true,
      stats: 'minimal'
    },

    devtool: 'eval',

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  })
}
