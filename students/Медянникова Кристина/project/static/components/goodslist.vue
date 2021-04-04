<template>
    <section class="goods">
        <goods-item 
            v-for="item in filteredGoods"
            v-bind:key="item.id" 
            v-bind:item="item" 
            v-on:add="handleAddItem"
        />
        <goods-empty v-if="filteredGoods.lenght === 0" />
    </section>
</template>

<script>
    import goodsempty from './components/empty.vue';
    import goodsitem from './components/item.vue';
    export default {
        name: 'goodslist',
        props: ['filteredGoods'],
        methods: {
            handleAddItem(item) {
            this.$emit('add-item', item)
         },
    },
    components: {
        goodsitem,
        goodsempty
    },  
}
</script> 