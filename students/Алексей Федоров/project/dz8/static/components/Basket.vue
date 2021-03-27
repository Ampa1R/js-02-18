<template>
     <div class="basket">
            <BasketItem
                v-for="item, index in basketGoods"
                :key="index"
                :item="item"
                :index="index"
                v-on:remove="$emit('remov', item)"
                v-on:input="$emit('inputu', {item:item, e:$event} )"
            />

            <p class="basket-totall" v-if="quantity !== 0">
                В корзине {{ quantity }} шт. на сумму {{ total }}$ 
            </p>
            <p class="basket-totall" v-else>
                Корзина пуста. 
            </p>
        </div>
</template>
<script>
import BasketItem from './BasketItem.vue'
export default {
    props: ['quantity','total','basketGoods'],
    components: {
        BasketItem,
    }
}
</script>