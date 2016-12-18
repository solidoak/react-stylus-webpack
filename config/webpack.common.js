const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackCommon = {
  entry: {
    app: path.resolve(__dirname, '../app'),
    vendor: ['react', 'react-dom'],
    styles: path.resolve(__dirname, '../app', 'main.styl')
  },

  output: {
    filename: 'bundle.[name].js',
    path: path.join(__dirname, '../dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../app', 'index.html')
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      stylus: {
        default: {
          use: [ require('nib')() ]
        }
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
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
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../app')
      }
    ]
  }
}

module.exports = webpackCommon
