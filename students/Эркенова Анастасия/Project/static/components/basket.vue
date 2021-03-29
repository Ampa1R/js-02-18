<template>
  <div class="basket">
    <div class="basket_item" v-for="item in basketGoods" v-bind:key="item.id">
      <h3>{{ item.title }}</h3>
      <p>{{ item.price }} x {{ item.quantity }}</p>
      <button class="delete_button" v-on:click="$emit('remove-item', item.id)">
        -
      </button>
    </div>
    <div class="calcTotalPrice">Общая стоимость: {{ calcTotalPrice }}</div>
  </div>
</template>

<script>
export default {
  name: "basket",
  props: ["basketGoods", "calcTotalPrice"],
};
</script>