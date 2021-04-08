const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './static/script.js',
    output: {
        filename: './bundle.js'
    },
    mode: 'production',
    watch: true, // в документации написано о watch mode, поэтому мое предположение, что это ответ на 2 вопрос
    watchOptions: {
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.txt$/i,
                use: 'raw-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './static/index.html' }),
        new VueLoaderPlugin()
    ],
    resolve: {
        extensions: ['vue'],
        alias: {
            Utilities: path.resolve(__dirname, 'static/components/'),

        },
    },
};