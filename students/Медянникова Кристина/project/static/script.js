'use strict';

const API_ROOT = 'https://localhost:3000/api';
const request = (path = '', method = 'GET', body) => {
     //Объект Promise (промис) используется для отложенных и асинхронных вычислений.
    return new Promise((resolve, reject) => {
        //узел XMLHttpRequest - это оболочка для встроенного http-клиента, имитирующая объект
        const xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log({ response: xhr.responseText });
                    //вызывает успешное исполнение промиса
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    //отклоняет промис
                   // console.error(xhr.responseText);
                    reject(xhr.responseText);
                }
            }
        }
        
        xhr.open(method, `${API_ROOT}/${path}`);

        xhr.setRequestHeader('Content-Type', 'application/json');
        
        xhr.send(body);
    });
}


Vue.component('search', {
    props: ['searchValue'],
    template: `
    <input type="text" class="search" 
        v-bind:searchValue="searchValue"
        v-on:input="$emit('input', $event.target.value)">
    `,
    methods: {
        handleAddItem(event) {
            this.$emit('change', event.target.searchValue);
         }
      }
});

Vue.component('v-basket', {
    props: ['basketGoods', 'total-amount', 'isVisibleBasket'],
    template: `
         <div class="basket" v-if="isVisibleBasket">
            <div class="basket-item" v-for="item in basketGoods">
                <h4 class="product-title">{{ item.title}}</h4>
                 <p class="product-price">{{ item.price }}  X {{ item.quantity }}</p>
            <button @click="deletFromBasket(item.id)" class="removeButton">Убрать из корзины</button>
        </div>
            <p class="total_amount">Сумма корзины:<b>{{ total }}</b></p> 
        </div> 
    `
});


Vue.component('goods', {
    props: ['filteredGoods'],
    template: `
        <section class="goods_list">
            <item
                v-for="item in filteredGoods"
                v-bind:item="item"
                v-on:add="$emit('add-item', $event)"
            />
            <there-data v-if="filteredGoods.length === 0" /> 
        </section>
    `,
   methods: {
         handleAddItem(item) {
            this.$emit('add-item', item);
         }
    }
});

Vue.component('item', {
    props: ['item'],
    template: `
        <div class="item">
            <h2 class="product-title">{{ item.title }}</h2>
            <p class="product-price">{{ item.price }} $</p>
            <button class="by-btn" name="add-to-basket" v-on:click.prevent="$emit('add', item)">В корзину</button>
        </div>
    `,
     methods: {
         handleAdd() {
             this.$emit('add', this.item);
         }
     }
});

Vue.component('there-data', {
    template: `
        <div class="there--data">
            Нет данных
        </div>
    `,
});


new Vue({
    el: '#app',
    data: {
        goods_list: [],
        searchValue: '',
        basketGoods: [],
        isVisibleBasket: false,
        isError: false,

    },
    created() {
        this.fetchGoods();
        this.fetchBasket();
    },
    computed: {
        filteredGoods() {
            const regexp = new RegExp(this.searchValue, 'i');
            return this.goods_list.filter((goodsItem) => 
                regexp.test(goodsItem.title)
            );
        },
        total() {
            return this.basketGoods.reduce(
                (accumulator, currentElement) => 
                    accumulator + (currentElement.price * currentElement.quantity),
                0
            );
        }
    },
    methods: {
        async fetchGoods() {
            try {
                const res = await fetch(`${API_ROOT}/goods`);
                const goods_list = await res.json();
                this.goods_list = goods_list;
            } catch (err) {
                //console.log(`Can't fetch data`, error);
                this.isError = true;
                throw new Error(error);
            }
        },
        fetchBasket() {
            request('basket-goods')
                .then((goods_list) => {
                    this.basketGoods = goods_list.contents;
                    console.log('basket', this.basketGoods);
                })
                .catch((error) => {
                    console.log(`Can't fetch basket data`, error);
                    this.isError = true;
                });
        },
        oldAddItem(item) {
            request('basket-goods', 'POST', JSON.stringify(item))
                .then((response) => {
                    if (response.result !== 0) {
                        const itemIndex = this.basketGoods.findIndex((goodsItem) => goodsItem.id === item.id);
                        if (itemIndex > -1) {
                            this.basketGoods[itemIndex].quantity += 1;
                        } else {
                            this.basketGoods.push({ ...item, quantity: 1 });
                        }
                        console.log(this.basketGoods);
                    } else {
                        console.error(`Can't add item to basket`, item, this.basketGoods);
                    }
                })
        },
        addItem(item) {
            fetch(`${API_ROOT}/basket-goods`, {
                method: 'POST',
                body: JSON.stringify(item),
                headers: {
                    'Content-Type': 'application/json'
                }

            })
                .then((response) => {
                    if (response.result !== 0) {
                        const itemIndex = this.basketGoods.findIndex((goodsItem) => goodsItem.id === item.id);
                        if (itemIndex > -1) {
                            this.basketGoods[itemIndex].quantity += 1;
                        } else {
                            this.basketGoods.push({ ...item, quantity: 1 });
                        }
                        console.log(this.basketGoods);
                    } else {
                        console.error(`Can't add item to basket`, item, this.basketGoods);
                    }
                })
        },
        oldRemoveItem(id) {
            request('deleteFromBasket.json')
                .then((response) => {
                    if (response.result !== 0) {
                        this.basketGoods = this.basketGoods.filter((goodsItem) => goodsItem.id !== parseInt(id));
                        console.log(this.basketGoods);
                    } else {
                        console.error(`Can't remove item from basket`, item, this.basketGoods);
                    }
                });
        },
        async removeItem(id) {

            const rawResponse = await fetch(`${API_ROOT}/basket-goods/${id}`, {
                method: 'DELETE',
            });
            const response = await res.json();

            if (response.result !== 0) {
                this.basketGoods = this.basketGoods.filter((goodsItem) => goodsItem.id !== parseInt(id));
                console.log(this.basketGoods);
            } else {
                console.error(`Can't remove item from basket`, item, this.basketGoods);
            }
        }
    },
});
