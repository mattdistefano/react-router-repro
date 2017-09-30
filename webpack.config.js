const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: __dirname + '/dist',
    //libraryTarget: 'umd',
  },
  context: path.resolve(__dirname, 'src'),
  devtool: 'source-map',
};
