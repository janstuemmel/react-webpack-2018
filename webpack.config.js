const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    './src/index.js'
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: [ 'babel-loader' ] }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new webpack.HotModuleReplacementPlugin()
  ],

  performance: { hints: false },

  resolve: { extensions: ['*', '.js', '.jsx'] },

  devtool: 'cheap-source-map',

  devServer: { contentBase: './dist', hot: true },

};
