// const request = (path = '', method = 'GET', body) => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
        
//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     console.log({ response: xhr.responseText });
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     console.error(xhr.responseText);
//                     reject(xhr.responseText);
//                 }
//             }
//         }
        
//         xhr.open(method, `${API_ROOT}/${path}`);
        
//         xhr.send(body);
//     });
// }

Vue.component('goods-list', {
    props: ['goods'],
    template: `
        <div class="goods-list">
            <p v-if="goods.length === 0">Нет данных</p>
            <goods-item v-for="good in goods" :good="good"></goods-item>
        </div>
    `
});

Vue.component('goods-item', {
    props: ['good'],
    template: `
        <div class="goods-item">
            <h3>{{ good.product_name }}</h3>
            <p>{{ good.price }}</p>
        </div>
    `
});

Vue.component('search', {
    props: ['item-search', 'filter-items'],
    template: `
        <div class="search">
            <input type="text" class="goods-search"/>
            <button class="search-button" type="button" @click="filter-items" >Искать</button>
        </div>
    `
})

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: 'Kek',
        isVisibleCart: false
    },
    methods: {
        makeGETRequest(url, callback) {
            const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
    
            var xhr;
    
            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) { 
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }
    
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }
    
            xhr.open('GET', API_URL+url, true);
            xhr.send();
        },

        mounted() {
            this.makeGETRequest(`/catalogData.json`, (goods) => {
            
                this.goods = JSON.parse(goods);
                this.filteredGoods = JSON.parse(goods);
            });
        }, 

        filterGoods() {

        }
        
    }
});



app.mounted();