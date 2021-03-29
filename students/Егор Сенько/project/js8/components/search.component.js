Vue.component('search', {
    props: ['value'],
    template: `
        <div class="search">
            <input type="text" class="goods-search" @input="handleInput" :value="value"/>
        </div>
    `,
    methods: {
        handleInput(event) {
            this.$emit('change', event.target.value);
        }
    }
})