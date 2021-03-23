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
      path: '/index.html',
      component: loadPage('index'),
      alias: '/'
    },
    {
      path: '/checkout.html',
      component: loadPage('checkout'),
      alias: '/checkout'
    },
    {
      path: '/product.html',
      component: loadPage('product'),
      alias: '/product'
    },
    {
      path: '/shopping_cart.html',
      component: loadPage('shopping_cart'),
      alias: '/shopping_cart'
    },
    {
      path: '/single_page.html',
      component: loadPage('single_page'),
      alias: '/single_page'
    }
  ]
})

export default router