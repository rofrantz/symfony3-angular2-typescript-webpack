const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const path = require('path');

const config = require('./conf.js');

module.exports = webpackMerge.smart(config, {
    debug: false,
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, '../../public/assets'),
        filename: '[name].js',
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].chunk.js'
    },
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