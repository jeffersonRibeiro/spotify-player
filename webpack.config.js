const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './main.js',
  },
  output: {
    path: path.resolve(__dirname, './example'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './example'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
