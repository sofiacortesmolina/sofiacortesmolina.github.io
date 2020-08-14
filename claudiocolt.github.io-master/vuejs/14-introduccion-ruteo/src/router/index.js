import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld'
import TestComponent from '../components/TestComponent'
import ColtComponent from '../components/ColtComponent'
import PerfilUsuario from '../components/PerfilUsuario'
import NotFound from '../components/NotFound'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/test',
      component: TestComponent
    },
    {
      path: '/colt',
      component: ColtComponent
    },
    {
      path: '/usuario/:nombre',
      component: PerfilUsuario
    },
    {
      path: '*',
      component: NotFound
    }
  ]

})