import { createRouter, createWebHistory } from 'vue-router'

import SingUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Work from './components/Work.vue'
import Datos from './components/Datos.vue'
import Grafico from './components/Grafico.vue'
import Try from './components/try.vue'
import Form from './components/Form.vue'
import Home from './components/Home.vue'

const routes = [
  
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },

  {
    path: '/singup',
    name: 'Singup',
    component: SingUp
  },
  {
    path:'/work',
    name:'work',
    component:Work
  },
  {
    path: '/work/form',
    name: "form",
    component: Form
  },
  {
    path:'/datos',
    name: 'datos',
    component: Datos

  },
  {
    path:'/grafico',
    name: 'grafico',
    component: Grafico

  },

  {
    path:'/try',
    name:'try',
    component: Try
  }


]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
  