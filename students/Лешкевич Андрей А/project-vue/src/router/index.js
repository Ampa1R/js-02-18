import { createRouter, createWebHistory } from 'vue-router'

function loadPage(page) {
  return () => import(
    /* webpackChunkName: "chunk-[request]" */
    /* webpackPrefetch: 0 */
    /* webpackPreload: 0 */
    `@/pages/${page}.vue`)
}
const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/vue/index.html',
      component: loadPage('index'),
      alias: '/vue/'
    },
    {
      path: '/vue/checkout.html',
      component: loadPage('checkout'),
      alias: '/vue/checkout'
    },
    {
      path: '/vue/product.html',
      component: loadPage('product'),
      alias: '/vue/product'
    },
    {
      path: '/vue/shopping_cart.html',
      component: loadPage('shopping_cart'),
      alias: '/vue/shopping_cart'
    },
    {
      path: '/vue/single_page.html',
      component: loadPage('single_page'),
      alias: '/vue/single_page'
    }
  ]
})

export default router