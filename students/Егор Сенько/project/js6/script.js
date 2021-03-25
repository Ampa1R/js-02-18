// const request = (path = '', method = 'GET', body) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
        
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     console.log({ response: xhr.responseText });
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     console.error(xhr.responseText);
//                     reject(xhr.responseText);
//                 }
//             }
//         }
        
//         xhr.open(method, `${API_ROOT}/${path}`);
        
//         xhr.send(body);
//     });
// }

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
        </div>
    `
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
        <div class="cart">
            <cart-item v-for="item in items" :item="item"></cart-item>
        </div>
    `
});

Vue.component('cart-item', {
    props: ['item'],
    template: `
        <div class="cart-item">
            <h2>{{cart-item.product_name}}</h2>
            <p>{{cart-item.price}}</p>
        </div>
    `
})

Vue.component('request-hernya', {
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
        isVisibleCart: false,
        cartItems: [],
        errorCode: 200, 
        errorText: '',
        isError: false
    },

    methods: {
        addItem(item) {
            let tmp = cartItems.map(cartItem => cartItem.product_name === item.product_name);

            if (!tmp.length) {
                cartItems.push(item);
            }
        },

        async fetchGoods() {
            try {
                const API_ROOT = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
                const res = await fetch(`${API_ROOT}/catalogData.json`);
                const goods = await res.json();
                this.isError = false;
                this.goods = goods;
            } catch (error) {
                this.isError = true;
                this.errorText = error.message;
            }
        }
    },

    computed: {
        filteredGoods() {
            return this.goods.filter((item) => item.product_name.toLowerCase().includes(this.searchLine.toLowerCase()));
        }
    }
});

app.fetchGoods();