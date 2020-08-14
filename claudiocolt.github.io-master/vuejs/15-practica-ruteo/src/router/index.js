import Vue from 'vue'
import VueRouter from 'vue-router'


import WelcomePage from '../components/WelcomePage'
import LoginPage from '../components/LoginPage'
import CategoryPage from '../components/CategoryPage'
import RestaurantPage from '../components/RestaurantPage'
import NotFound from '../components/NotFound'


Vue.use(VueRouter)

const router  = new VueRouter({
 
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: WelcomePage,
      meta: {
        title: 'DojoReviews',
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage,
      meta: {
        title: 'Login DojoReviews',
      }
    },
    {
      path: '/:restaurant',
      name: 'Restaurant',
      component: RestaurantPage,
      meta: {
        title: 'Restaurant View',
      }

    },
    {
      path: '/category/:id',
      name: 'Category',
      component: CategoryPage,
      meta: {
        title: 'Category View',
      }
    },     
    {
      path: '*',
      name: 'Notfound',
      component: NotFound,
      meta: {
        title: 'Not Found',
      }
    }
  ]

})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;//ew VueRouter({