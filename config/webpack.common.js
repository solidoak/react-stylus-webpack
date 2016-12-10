const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackCommon = {
  entry: {
    app: path.join(__dirname, '../app'),
    vendor: path.join(__dirname, '../vendor.js'),
    styles: path.resolve(__dirname, '../app', 'main.styl')
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html')
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      stylus: {
        default: {
          use: [ require('nib')() ]
        }
      }
    })
  ],

  resolve: {
    extensions: [ '.js', '.jsx', '.styl' ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel-loader', 'eslint-loader' ],
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = webpackCommon
