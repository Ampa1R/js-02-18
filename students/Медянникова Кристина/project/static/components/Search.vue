
<template>
    <input type="text" class="search" 
        v-bind:searchValue="searchValue" 
        v-on:input="handleAddItem" />
</template>

<script>
    export default {
        name: 'goodssearch',
        props: ['searchValue'],
        methods: {
                handleAddItem(event) {
                this.$emit('input', event.target.searchValue);
            }
        }
    }
</script> 