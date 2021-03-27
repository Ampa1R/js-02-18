<template>
    <div class="basket-item" >
                <h3> {{ index + 1 }}. {{ item.title }}</h3>
                <p> {{ item.price }}$</p>
                <input class="basket-quantity" type="number" required min="0" max="100" 
                v-on:click.prevent ="(e) => inputQuantityClik(e)" v-bind:value="item.quantity"
                >
                <button class="basket-button" type="button"  
                    v-on:click.prevent="buttonClikDelBask"
                >x</button>
            </div>
</template>
<script>
export default {
    props: ['index','item'],
    methods: {
        buttonClikDelBask() {
          //  console.log('дел корзина   ' );
            this.$emit('remove');
        },
        inputQuantityClik(e) {
         //   console.log('количество   '+ e.target.value);
            this.$emit('input', e.target.value);
        },

    }
}
</script>