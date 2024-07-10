import { createRouter, createWebHistory } from 'vue-router'

import SingUp from './views/SignUp.vue'
import Login from './views/Login.vue'
import Work from './views/Work.vue'
import Datos from './views/Datos.vue'
import Grafico from './components/Appgrafico.vue'
import Form from './components/Form.vue'
import Home from './views/Home.vue'
import Admin from './components/Admin.vue'

const routes = [
  
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
    path: '/work/form/:modoEdicion/:registro',
    name: "formUp",
    component: Form,
    props: true
  },
  {
    path: '/work/form',
    name: "form",
    component: Form,
    
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
    path:'/admin',
    name:'admin',
    component: Admin
  }


]

const router = createRouter({
  history:createWebHistory(),
  routes
})

export default router
  