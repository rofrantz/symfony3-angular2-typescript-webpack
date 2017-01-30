const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const config = require('./conf.js');

const rootDir = path.resolve(__dirname, '..');

module.exports = webpackMerge.smart(config, {
    debug: false,
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: { screw_ie8 : true },
            compress: { screw_ie8: true },
            comments: false
        })
    ]
});