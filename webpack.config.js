const path = require('path');
const webpack = require('webpack');

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
    filename: '[]..js'
  },
  module: {
    rules: [
      { test: /\.jsx$/, use: 'babel-loader' }
    ]
  },
  plugins: [
  ]
};
