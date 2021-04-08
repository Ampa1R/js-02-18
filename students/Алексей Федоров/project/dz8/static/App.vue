<template>
     <div id="app">
        
        <header>
            <div class="wrap wrap_header">
                
                <Basket
                    v-if="basketOpen"
                    :quantity="quantity"
                    :total="total"
                    :basket-goods="basketGoods"
                    v-on:remov="removeItem"
                    v-on:inputu="inputQuantityClik"
                />
                
                <CartButtonBlock
                    :basket-open="basketOpen"
                    :quantity="quantity"
                    v-on:basket="basketGoodsOpen"
                />
                  
            </div>
        </header>
         <hr>
        <main>
            <div class="wrap wrap_catalog">
                
                <SerchBlok
                    v-on:filter-goods="filterGoods"
                    :search="searchValue"
                    v-on:addtask="searchValueD=$event"
                />
                  
                <hr>  
                 
                <Goodslist 
                    v-if="!isError"
                    :goods="filteredGoods"
                    v-on:addtobas="addItem"
                />
                 
                <Error 
                    v-else
                />
            </div>
            
        </main>

        <hr>
       
        
    </div>
</template>

<script>

import SerchBlok from './components/SerchBlok.vue'
import Goodslist from './components/GoodsList.vue'
import Error from 'Utilities/Error.vue'
import CartButtonBlock from 'Utilities/CartButtonBlock.vue'
import Basket from 'Utilities/Basket.vue'


export default {
    name: 'App',
    data() {
        return {
            API_ROOT: 'http://localhost:3000/api',
            goods: [],
            searchValue: '',
            searchValueD: '',
            basketGoods: [],
            basketOpen: false,
            name: 'Kont',
            isError: false,
  
        }
    },
    created() {
        this.fetchGoods();
        this.fetchBasket();
    },
    computed: {
            filteredGoods() {
                const regexp = new RegExp(this.searchValue, 'i');
                return this.goods.filter((goodsItem) => 
                    regexp.test(goodsItem.title)
                );
            },
            total() {
                return this.basketGoods.reduce(
                    (accumulator, currentElement) => (accumulator + (currentElement.price*currentElement.quantity ))
                ,0);
            },
            quantity() {
                return this.basketGoods.reduce(
                    (accumulator, currentElement) => (accumulator + (currentElement.quantity ))
                ,0);
            },

        },
     methods: {
            async fetchGoods() {
                try {
                    console.log('запрос каталога')
                    const res = await fetch(`${this.API_ROOT}/goods`);
                    const goods = await res.json();
                    this.goods = goods;
                } catch (error) {
                    console.log(`Can't fetch data`, error);
                    this.isError = true;
                    throw new Error(error);
                }
            },
            async fetchBasket() {
                try {
                    console.log('запрос корзины')
                    const res = await fetch(`${this.API_ROOT}/basket-goods`);
                    const goods = await res.json();
                    console.log('goods' + goods)
                    this.basketGoods = goods.contents;
                } catch (error) {
                    console.log(`Can't fetch basket data`, error);
                    this.isError = true;
                    throw new Error(error);
                }
            },
            
            addItem(item) {
                fetch(`${this.API_ROOT}/basket-goods`, {
                    method: 'POST',
                    body: JSON.stringify(item),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then((response) => {
                        console.log('' + response.status);
                        if (response.status !== 0) {
                            const itemIndex = this.basketGoods.findIndex((goodsItem) => goodsItem.id === item.id);
                            if (itemIndex > -1) {
                                this.basketGoods[itemIndex].quantity += 1;
                            } else {
                                this.basketGoods.push({ ...item, quantity: 1 });
                            }
                            console.log('Добавление товара ' + this.basketGoods);
                        } else {
                            console.error(`Can't add item to basket`, item, this.basketGoods);
                        }
                    })
            },
            removeItem(id) {
                fetch(`${this.API_ROOT}/basket-delete`, {
                    method: 'POST',
                    body: JSON.stringify(id),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })               
                    .then((response) => {
                        console.log(response.status);
                        if (response.status !== 0) {
                            console.log(id);
                            this.basketGoods = this.basketGoods.filter((goodsItem) => goodsItem.id !== parseInt(id.id));
                            console.log(this.basketGoods);
                        } else {
                            console.error(`Can't remove item from basket`, item, this.basketGoods);
                        }
                    });
            },
            filterGoods() {
                console.log('фильтер')
                this.searchValue = this.searchValueD; 
                console.log(this.searchValue)
            },
            basketGoodsOpen() {
                this.basketOpen = ! this.basketOpen
            },

            inputQuantityClik(q){
                if (q.e > 0) {
                    fetch(`${this.API_ROOT}/basket-quantity`, {
                        method: 'POST',
                        body: JSON.stringify(q),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then((response) => {
                            console.log('изменение колличества ' + response.status);
                            if (response.status !== 0) {
                                q.item.quantity = +q.e
                            } else {
                                console.error(`Can't remove item from basket`, item, this.basketGoods);
                            }
                        })
                } else {
                    this.removeItem(q.item)
                }
            },

            addTask(val) {
                console.log('фильтер ' + val)
                this.searchValueD = val;
            },

            addToBasket(q) {
                console.log('добавить в корзину   ' + q)
                console.dir(q)
            },


        },
    components: {
        SerchBlok, 
        Error,
        Goodslist,
        CartButtonBlock,
        Basket,
    }
}
</script>

<style scoped>
 
</style>
