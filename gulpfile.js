const gulp = require('gulp');
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
    module: {
        entry: [
            './src/app/app.module.js'
        ],
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015'],
                cacheDirectory: true
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }],
        plugins: [
            new HtmlWebpackPlugin({
                template: __dirname + '/src/index.html',
                filename: 'index.html',
                inject: 'body'
            }),
            new ngAnnotatePlugin({
                add: true
            }),
            new ExtractTextPlugin('style.css', {
                allChunks: true
            })
        ]
    }
};

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

gulp.task('build', function(done) {
    webpack(localConfig).run(onBuild(done));
});

gulp.task('watch', function() {
    new WebpackDevServer(webpack(localConfig), {
        publicPath: localConfig.output.publicPath,
        hot: true
    }).listen(3000, 'localhost', function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('webpack dev server listening at localhost:3000');
        }
    });

});

gulp.task('build', ['build']);
gulp.task('watch', ['watch']);
gulp.task('dev', ['build', 'watch']);