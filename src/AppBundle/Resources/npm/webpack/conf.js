'use strict';

const path = require('path');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    cache: true,
    entry: {
        "app": [path.resolve(rootDir, 'src', 'bootstrap')],
        "vendors": [path.resolve(rootDir, 'src', 'vendors')]
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        root: path.resolve(rootDir, 'src'),
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
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            minChunks: Infinity
        })
    ]
};
