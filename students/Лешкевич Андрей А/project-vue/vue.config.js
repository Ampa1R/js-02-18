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
      entry: './src/App.js',
      template: 'public/index.html',
      title: 'Brand shop - Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'checkout': {
      entry: './src/App.js',
      template: 'public/index.html',
      title: 'Brand shop - Checkout',
      chunks: ['chunk-vendors', 'chunk-common', 'checkout']
    },
    'product': {
      entry: './src/App.js',
      template: 'public/index.html',
      title: 'Brand shop - Product',
      chunks: ['chunk-vendors', 'chunk-common', 'product']
    },
    'shopping_cart': {
      entry: './src/App.js',
      template: 'public/index.html',
      title: 'Brand shop - Some Product Page',
      chunks: ['chunk-vendors', 'chunk-common', 'shopping_cart']
    },
    'single_page': {
      entry: './src/App.js',
      template: 'public/index.html',
      title: 'Brand shop - Shoping Cart',
      chunks: ['chunk-vendors', 'chunk-common', 'single_page']
    }
  }
}