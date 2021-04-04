<template>
    <div class="basket" v-if="isVisibleBasket">
      <div class="basket-item" v-for="item in basketGoods" v-bind:key="item.id">
          <h4 class="product-title">{{ item.title}}</h4>
          <p class="product-price">{{ item.price }}  X {{ item.quantity }}</p>
          <button @click="deletFromBasket(item.id)" class="removeButton">Убрать из корзины</button>
        </div>
            <p class="total_amount">Сумма корзины:<b>{{ total }}</b></p> 
        </div> 
</template>

<script>
    export default {
      name: "basket",
      props: ['basketGoods', 'total', 'isVisibleBasket'],
  };
</script> 