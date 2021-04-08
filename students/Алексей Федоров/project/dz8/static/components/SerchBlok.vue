<template>
    <div class="search-blok">
            <input type="text" class="search" 
                v-on:input="(e) => inputKey(e)"
                v-bind:value="search"/>
            <button class="search-button"  v-on:click.prevent="$emit('filter-goods',)">Искать</button>
    </div>
</template>

<script>
export default {
   
   props: ['search'],
     
    methods: {
        inputKey(e) {
            console.log('инпут')
            this.$emit('addtask', e.target.value);
        }, 
    }
}
</script>

<style>
 
</style>