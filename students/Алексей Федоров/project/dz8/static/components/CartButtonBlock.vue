<template>
     <div class="cart-button-block">
            <button class="cart-button" type="button" 
                v-on:click.prevent="$emit( 'basket')">Корзина</button>
            <div class="cart-button-counter" 
                v-if="!basketOpen">
                    <p id="basket_count"> {{ quantity }} </p>
            </div>
        </div>
</template>
<script>


export default {
    props: ['basketOpen','quantity'],
}
</script>
