const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/*
module.exports = {
    entry: './src/script.js',
    output: {
        filename: 'bundle.js',
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    module: {
        rules: [
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
            }
        ]
    }
};*/
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    //mode: 'development',
    mode: 'production',
    
    entry: './static/script.js',
    output: {
        filename: 'bundle.js',
    },
    
   
    module: {
        rules: [
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        // это будет применяться к файлам `.js`
        // А ТАКЖЕ к секциям `<script>` внутри файлов `.vue`
        {
            test: /\.js$/,
            //исключения
            exclude: (/node_modules/,/index.js/),
            loader: 'babel-loader'
        },
        // это будет применяться к файлам `.css`
        // А ТАКЖЕ к секциям `<style>` внутри файлов `.vue`
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'vue-style-loader',
                'css-loader'
            ]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './static/index.html' }),
        // убедитесь что подключили плагин!
        new VueLoaderPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    resolve: {
        extensions: ['vue'],
        alias: {
          Utilities: path.resolve(__dirname, 'static/components/'),
          
        },
      },
}