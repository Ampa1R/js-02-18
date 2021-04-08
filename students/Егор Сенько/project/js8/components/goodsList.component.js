Vue.component('goods-list', {
    props: ['goods'],
    template: `
        <div class="goods-list">
            <p v-if="goods.length === 0">Нет данных</p>
            <goods-item v-for="good in goods" :good="good"></goods-item>
        </div>
    `
});