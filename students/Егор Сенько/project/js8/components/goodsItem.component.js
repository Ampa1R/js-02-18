Vue.component('goods-item', {
    props: ['good'],
    template: `
        <div class="goods-item">
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
            <button @click="addToCart(good)">В корзину</button>
        </div>
    `,

    methods: {
        addToCart(item) {
            this.$root.makePOSTRequest(`/addToCart`, JSON.stringify(item), (response) => {
                this.$root.fetchCartGoods();
            });
        }
    }
});