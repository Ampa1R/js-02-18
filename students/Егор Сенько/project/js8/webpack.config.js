module.exports = {
    entry: {
        cartItem: './components/cartItem.component.js',
        goodsItem: './components/goodsItem.component.js',
        goodsList: './components/goodsList.component.js',
        requestErr: './components/requestErr.component.js',
        search: './components/search.component.js',
        userCart: './components/userCart.component.js',
        main: './script.js'
    },

    output: {
        filename: './[name].js'
    }
}