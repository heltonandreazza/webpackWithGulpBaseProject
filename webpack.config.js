'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/app/app.module.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        cacheDirectory: true
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract("css-loader!sass-loader")
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ngAnnotatePlugin({
      add: true
    }),
    new webpack.ProvidePlugin({
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin('style.css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version),
    })
  ]
};