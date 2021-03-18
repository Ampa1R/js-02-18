const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
  publicPath: '/vue/',
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: 'src/assets/img-dyn/*',
          to: 'img/[name].[ext]'
        }
      ])
    ]
  },
  pages: {
    'index': {
      entry: './src/pages/main.js',
      template: 'public/index.html',
      title: 'Brand shop - Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'checkout': {
      entry: './src/pages/main.js',
      template: 'public/index.html',
      title: 'Brand shop - Checkout',
      chunks: ['chunk-vendors', 'chunk-common', 'checkout']
    }
  }
}