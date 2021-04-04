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
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  console.log("beforeResolve")
  //if (to.name) {
    console.log("beforeResolve start")
    // Start the route progress bar.
    NProgress.start()
  //}
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
    console.log("beforeResolve done")
    setTimeout(() => {
      NProgress.done()
    }, 2000);
  //
})
export default router