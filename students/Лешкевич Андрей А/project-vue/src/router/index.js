
import { createRouter, createWebHistory } from 'vue-router'
const LazyIndex = () => import('../pages/index/App.vue')
const LazyCheckout = () => import('../pages/checkout/App.vue')
const LazyProduct = () => import('../pages/product/App.vue')
const LazyShopping_cart = () => import('../pages/shopping_cart/App.vue')
const LazySingle_page = () => import('../pages/single_page/App.vue')

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    { 
      path: '/vue/index.html',
      component: LazyIndex,
      alias: '/vue/'
    },
    {
      path: '/vue/checkout.html',
      component: LazyCheckout,
      alias: '/vue/checkout'
    },
    {
      path: '/vue/product.html',
      component: LazyProduct,
      alias: '/vue/product'
    },
    {
      path: '/vue/shopping_cart.html',
      component: LazyShopping_cart,
      alias: '/vue/shopping_cart'
    },
    {
      path: '/vue/single_page.html',
      component: LazySingle_page,
      alias: '/vue/single_page'
    }
  ]
})

export default router