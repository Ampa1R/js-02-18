<template>
    <input type="text" class="search" v-bind:value="value" v-on:input="handleInput" />
</template>

<script>
export default {
  name: 'goodssearch',
  props: ['value'],
  methods: {
        handleInput(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>