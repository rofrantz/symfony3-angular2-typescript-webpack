const webpackMerge = require('webpack-merge');
const path = require('path');

const config = require('./conf.js');

module.exports = webpackMerge(config, {
    debug: true,
    devtool: 'cheap-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../../public/assets'),
        pathinfo: true,
        sourceMapFilename: '[file].map',
        chunkFilename: '[id].chunk.js'
    }
});