const webpackCommon = require('./webpack.common')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')

module.exports = () => {
  return merge(webpackCommon, {
    module: {
      rules: [
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader','stylus-loader']
          })
        }
      ]
    },

    plugins: [
      new ExtractTextPlugin('[name].css')
    ]
  })
}
