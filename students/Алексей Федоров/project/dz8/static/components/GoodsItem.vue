<template>
    <div class="goods-item">
            <h3>{{ good.title }}</h3>
            <p>{{ good.price }}</p>
            <button class="product-button"                 
                v-on:click="$emit('tobasket')"
            >Добавить</button>
        </div>
</template>

<script>
export default {
   
   props: ['good'],
     
    methods: {
        inputKey(e) {
            console.log('инпут')
            this.$emit('addtask', e.target.value);
        }, 
    }
}
</script>

<style scoped>
</style>