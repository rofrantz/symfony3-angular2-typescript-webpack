const webpack = require('webpack');
const path = require('path');

module.exports = {
    cache: true,
    entry: {
        'app': ['main'],
        /*'vendor': ['vendor']/*,
        'polyfills': ['polyfills']*/
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        root: path.resolve(__dirname, '../src'),
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    preLoaders: [
        {
            test: /\.js$/,
            loader: 'source-map-loader'
        }
    ],
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.NoErrorsPlugin()/*,
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",

            // filename: "vendor.js"
            // (Give the chunk a different name)

            minChunks: Infinity
            // (with more entries, this ensures that no other module
            //  goes into the vendor chunk)
        })*/
    ]
};