const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name].[hash].min.css',
});

//dir path
const rootPath = path.resolve(__dirname);
const appPath = path.resolve(rootPath, 'app');
const buildPath = path.resolve(rootPath, 'build');
const temPath = path.resolve(rootPath, 'app/templates');


const config = {
    entry: {
        app: path.resolve(appPath, 'index.js'),
        mobile: path.resolve(appPath, 'mobile.js'),
        vendors: ['jquery', 'moment']
    },

    output: {
        path: buildPath,
        filename: '[name].[hash].min.js'
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }, {
                        loader: 'sass-loader'
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                }),
                include: [appPath]
            }, {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 40000
                        }
                    }
                ],
                include: [appPath]
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(temPath, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            title: 'Hello Mobile app',
            template: path.resolve(temPath, 'mobile.html'),
            filename: 'mobile.html',
            chunks: ['mobile', 'vendors'],
            inject: 'body'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new UglifyJSPlugin({}),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: '[name].[hash].min.js'
        }),
        new webpack.BannerPlugin("Copyright xiaodabao.")
    ]
};

 module.exports = config;
