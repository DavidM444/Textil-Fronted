import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import SingUp from './components/SingUp.vue'

const routes = [
  {
    path: '/',
    name: 'root',
    component: App
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
  