/*
 *  webpack configuration
 */

var HtmlWebpackPlugin = require('html-webpack-plugin')
var Path              = require('path')

var entryFolder  = Path.resolve(__dirname, 'app/index.js')
var outputFolder = Path.resolve(__dirname, 'dist')

module.exports = {
  entry: entryFolder,
  output: {
    path: outputFolder,
    filename: 'app_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
