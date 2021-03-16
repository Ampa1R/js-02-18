
import { createRouter, createWebHistory } from 'vue-router'
import index from '../pages/index/App.vue'
import checkout from '../pages/checkout/App.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    { 
      path: '/vue/',
      component: index,
      alias: '/vue/index.html'
    },
    {
      path: '/vue/checkout',
      component: checkout,
      alias: '/vue/checkout.html'
    }
  ]
})

export default router