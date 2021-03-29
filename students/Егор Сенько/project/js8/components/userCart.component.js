Vue.component('user-cart', {
    props: ['items'],
    template: `
        <div>
            <cart-item v-for="item in items" :item="item"></cart-item>
        </div>
    `
});