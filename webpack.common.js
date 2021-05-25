const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirStyles = path.join(__dirname, 'styles');

/**
 * Webpack Configuration
 */
module.exports = env => {
    // Is the current build a development build
    const IS_DEV = !!env.dev;

    return {

        entry: {
            main: path.join(dirApp, 'index')
        },

        resolve: {
            modules: [
                dirNode,
                dirApp,
                dirStyles,
            ]
        },

        plugins: [
            new webpack.DefinePlugin({ IS_DEV }),

            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'index.ejs'),
                title: 'CMP debug mode'
            }),

            new ImageMinimizerPlugin({
                minimizerOptions: {
                    plugins: [
                        [
                            'imagemin-svgo',
                            {
                                plugins: [
                                    // SVGO options: "https://github.com/svg/svgo#what-it-can-do"
                                    {
                                        removeViewBox: false,
                                        removeXMLNS: true
                                    }
                                ]
                            }
                        ]
                    ]
                }
            })
        ],

        module: {
            rules: [
                // BABEL
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            compact: true
                        }
                    }
                },

                // IMAGES
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]'
                        }
                    }
                },

                // SVG
                {
                    test: /\.svg$/,
                    use: [
                        'raw-loader'
                    ]
                }
            ]
        },

/*
        optimization: {
            runtimeChunk: 'single'
        }
*/
    };
};
