const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = env => {
    return merge(common(env), {

        mode: 'development',

        // Use eval-cheap-source-map for accurate line numbers, eval has best build performance
        devtool: 'eval',

        output: {
            pathinfo: true,
            publicPath: '/',
            filename: '[name].js'
        },

        devServer: {
            host: '0.0.0.0'
        },

        module: {
          rules: [
            {
              test: /\.js$/,
              enforce: 'pre',
              use: ['source-map-loader'],
            },
          ],
        }

    });
};