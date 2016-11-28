import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: {
    app: path.join(__dirname, '../app'),
    vendor: path.join(__dirname, '../vendor.js')
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../index.html')
    })
  ],

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [ {
      test: /\.jsx?$/,
      loaders: [ 'babel-loader' ],
      exclude: /node_modules/
    } ]
  }
}
