import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

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
    })
  ],

  resolve: {
    extensions: [ '.js', '.jsx', '.styl' ]
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/
      }
    ]
  }
}

export default webpackCommon
