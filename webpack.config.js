'use strict';

var path = require('path');
var webpack = require('webpack');

var production = process.env.NODE_ENV == 'production';

var entries = ['./scripts/index'];
var plugins = [];


if(!production) {
  entries = [
    'webpack-dev-server/client?http://localhost:9001',
    'webpack/hot/only-dev-server'
  ].concat(entries);

  plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ].concat(plugins);
}


module.exports = {
  devtool: 'eval',
  entry: entries,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'scripts')
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.styl$/,
      loaders: ['style', 'css', 'stylus']
    }]
  }
};
