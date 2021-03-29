Vue.component('goods-list', {
    props: ['goods'],
    template: `
        <div class="goods-list">
            <p v-if="goods.length === 0">Нет данных</p>
            <goods-item v-for="good in goods" :good="good"></goods-item>
        </div>
    `
});

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

Vue.component('search', {
    props: ['value'],
    template: `
        <div class="search">
            <input type="text" class="goods-search" @input="handleInput" :value="value"/>
        </div>
    `,
    methods: {
        handleInput(event) {
            this.$emit('change', event.target.value);
        }
    }
})

Vue.component('user-cart', {
    props: ['items'],
    template: `
        <div v-if="items.length">
            <h3>Корзина</h3>
            <cart-item v-for="item in items" :item="item"></cart-item>
        </div>
    `
});

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

Vue.component('request-err', {
    props: ['ermsg'],
    template: `
        <p>Ошибка {{ermsg}}</p>
    `
});

const app = new Vue({
    el: '#app',

    data: {
        goods: [],
        searchLine: '',
        cartItems: [],
        errorCode: 200, 
        errorText: '',
        isError: false
    },

    methods: {
        // addItem(item) {
        //     let tmp = cartItems.map(cartItem => cartItem.product_name === item.product_name);

        //     if (!tmp.length) {
        //         cartItems.push(item);
        //     }
        // },

        async fetchGoods() {
            try {
                const res = await fetch(`/catalogData`);
                const goods = await res.json();
                this.isError = false;
                this.goods = goods;
            } catch (error) {
                this.isError = true;
                this.errorText = error.message;
            }
        },

        async fetchCartGoods() {
            try {
                const res = await fetch(`/cartData`);
                const goods = await res.json();
                this.isError = false;
                this.cartItems = goods;
            } catch (error) {
                this.isError = true;
                this.errorText = error.message;
            }
        },

        makePOSTRequest(url, data, callback) {
            let xhr;
        
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) { 
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
        
            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        
            xhr.send(data);
        },

        makeDELETERequest(url, data, callback) {
            let xhr;
        
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) { 
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
        
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
        
            xhr.open('DELETE', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        
            xhr.send(data);
        }
    },

    computed: {
        filteredGoods() {
            return this.goods.filter((item) => item.product_name.toLowerCase().includes(this.searchLine.toLowerCase()));
        }
    }
});

app.fetchGoods();
app.fetchCartGoods();