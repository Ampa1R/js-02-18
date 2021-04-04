<template>
    <div class="item">
        <h2 class="product-title">{{ item.title }}</h2>
        <p class="product-price">{{ item.price }} $</p>
        <button class="by-btn" name="add-to-basket" v-on:click.prevent="handleAdd('add', item)">В корзину</button>
    </div>
</template>

<script>
export default {
    name: 'goodsitem',
    props: ['item'],
    methods: {
        handleAdd(item) {
            this.$emit('add', item)
        }
    }
}
</script> 