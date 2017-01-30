const webpackMerge = require('webpack-merge');
const path = require('path');

const config = require('./conf.js');

module.exports = webpackMerge(config, {
    debug: true,
    devtool: 'cheap-source-map',
    output: {
        pathinfo: true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            minChunks: Infinity
        })
    ]
});