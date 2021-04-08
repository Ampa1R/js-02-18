<template>
    <div class="goods-list">
            <GoodItem v-for="good in goods" 
                :key="good.id"
                :good="good"
                v-on:tobasket="$emit( 'addtobas', good)"
            />
            <GoodListNo v-if="goods.length == 0"/>
    </div>
</template>

<script>
    import GoodItem from './GoodsItem.vue'
    import GoodListNo from './GoodsListNo.vue'
    export default {
    
    props: ['goods'],
        
        methods: {
            inputKey(e) {
                console.log('инпут')
                this.$emit('addtask', e.target.value);
            }, 
        },
        components: {
            GoodItem,
            GoodListNo
        }
    }
</script>

<style scoped>
</style>