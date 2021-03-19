
import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/index/App.vue'
import checkout from '../pages/checkout/App.vue'
import product from '../pages/product/App.vue'
import shopping_cart from '../pages/shopping_cart/App.vue'
import single_page from '../pages/single_page/App.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    { 
      path: '/vue/index.html',
      component: index,
      alias: '/vue/'
    },
    {
      path: '/vue/checkout.html',
      component: checkout,
      alias: '/vue/checkout'
    },
    {
      path: '/vue/product.html',
      component: product,
      alias: '/vue/product'
    },
    {
      path: '/vue/shopping_cart.html',
      component: shopping_cart,
      alias: '/vue/shopping_cart'
    },
    {
      path: '/vue/single_page.html',
      component: single_page,
      alias: '/vue/single_page'
    }
  ]
})

export default router