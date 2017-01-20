const webpack = require('webpack');
const path = require('path');

module.exports = {
    cache: true,
    entry: {
        'app': ['main']
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        root: path.resolve(__dirname, '../src'),
        modulesDirectories: ['node_modules']
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' }
        ]
    },
    preLoaders: [
        { test: /\.js$/, loader: 'source-map-loader' }
    ],
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(true)
    ]
};