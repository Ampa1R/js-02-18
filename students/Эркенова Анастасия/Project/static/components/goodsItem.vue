<template>
    <div class="item">
        <h2>{{ item.title }}</h2>
        <p>{{ item.price }}</p>
        <button class="add-to-basket" name="add-to-basket" v-on:click.prevent="handleAdd(item)">Add to basket</button>
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