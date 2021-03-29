
//плагин
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const path = require('path');
//Плагин  отвечает за клонирование любых других правил, которые вы определили, и их применение к соответствующим языковым блокам в .vueфайлах. Например, если у вас есть соответствие правил /\.js$/, оно будет применяться к <script>блокам в .vueфайлах.
const { VueLoaderPlugin } = require('vue-loader');

// для автоматической перезагрузки можно использовать флаг "webpack -w"

//Точка входа указывает на то, какой модуль WebPack должен использовать , чтобы начать строить свой внутренний граф зависимостей
module.exports = {
    entry: './static/script.js',
    output: {
        filename: 'bundle.js', //пыталась создать папку с bundle.js, но она почему-то не создалась
    },
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({ template: './static/index.html' }),
        new VueLoaderPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.txt$/i, //модуль text
                use: 'raw-loader',
            },
            {
                test: /\.css$/, //модуль css
                use: [
                  'vue-style-loader',
                  'css-loader'
                ]
              },
            {
                test: /\.vue$/, // модуль vue
                loader: 'vue-loader'
              },
            {
                test: /\.m?js$/, // это модуль js 
                exclude: /node_modules/, //игнорирует данную папку
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

}; 
