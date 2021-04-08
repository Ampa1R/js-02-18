Vue.component('cart-item', {
    props: ['item'],
    template: `
        <div class="goods-item">
            <h2>{{item.product_name}}</h2>
            <p>{{item.price}}</p>
            <p>{{item.quantity}}</p>
            <button @click="removeItem(item)">Удалить</button>
        </div>
    `,

    methods: {
        removeItem(item) {
            this.$root.makeDELETERequest(`/removeFromCart`, JSON.stringify(item), (response) => {
                this.$root.fetchCartGoods();
            });
        }
    }
})