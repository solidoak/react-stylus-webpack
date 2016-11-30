import webpack from 'webpack'
import webpackCommon from './webpack.common'

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
      new webpack.HotModuleReplacementPlugin(),
      new webpack.LoaderOptionsPlugin({
        test: /\.styl$/,
        stylus: {
          default: {
            use: [ require('nib')() ]
          }
        }
      })
    ]
  })
}
