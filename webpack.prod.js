const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = env => {
    return merge(common(env), {

        mode: 'production',

        // IMPORTANT: Configure server to disallow access to source maps from public!
        devtool: 'source-map',

        output: {
            path: path.resolve(__dirname, 'dist'),
            //filename: '[name].[contenthash].bundle.js'
            filename: '[name].bundle.js'
        },

        plugins: [
            new CleanWebpackPlugin(),
            new webpack.optimize.LimitChunkCountPlugin({
              maxChunks: 1
            })

/*
            new CopyPlugin({
                patterns: [
                    { from: path.join(__dirname, 'assets'), to: 'assets' }
                ]
            })
            */
        ]

    });
};
