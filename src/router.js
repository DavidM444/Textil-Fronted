import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import SingUp from './components/SingUp.vue'
import Inventario from './components/Inventario.vue'
import Home from './components/Home.vue'


const routes = [
  {
    path: '',
    name: 'root',
    component: App
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user/singUp',
    name: 'SingUp',
    component: SingUp
  },

  {
    path: '/user/inventario',
    name: 'inventario',
    component: Inventario
  },
  {
    path: '/user/home',
    name: 'home',
    component: Home 
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
  