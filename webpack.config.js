const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: '@/app.jsx'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.less', 'png', 'jpg'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[contenthash:8].js'
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '管理后台'
    })
  ]
};
