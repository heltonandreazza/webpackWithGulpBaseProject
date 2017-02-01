const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const path = require('path');
const DeepMerge = require('deep-merge');
const WebpackDevServer = require('webpack-dev-server');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var deepmerge = DeepMerge(function(target, source, key) {
  if (target instanceof Array) {
    return [].concat(target, source);
  }
  return source;
});

// generic
var defaultConfig = {
  entry: [
    './src/app/app.module.js'
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: "/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
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
}

function config(overrides) {
  return deepmerge(defaultConfig, overrides || {});
}

// local
var localConfig = config({
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version),
    })
  ]
});

// production
var productionConfig = config({
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version),
    })
  ]
});

// tasks
function onBuild(done) {
  return function(err, stats) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(stats.toString());
    }

    if (done) {
      done();
    }
  }
}

gulp.task('watch', function() {
  gutil.log(defaultConfig.output.publicPath);
  new WebpackDevServer(webpack(localConfig), {
    publicPath: defaultConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, "localhost", function(err) {
    if (err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
  });
});

gulp.task('build', function(done) {
  // return gutil.log('Gulp is running!')
  webpack(localConfig).run(onBuild(done));
});

gulp.task('dev', ['build', 'watch']);