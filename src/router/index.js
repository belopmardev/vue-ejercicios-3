import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Ejemplo3 from '../views/Ejemplo3.vue'
import Ejemplo4 from '../views/Ejemplo4.vue'
import Ejemplo5 from '../views/Ejemplo5.vue'
import Ejemplo6 from '../views/Ejemplo6.vue'
import Ejemplo7 from '../views/Ejemplo7.vue'
import Ejemplo8 from '../views/Ejemplo8.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ejemplo3',
    name: 'Ejemplo3',
    component: Ejemplo3
  },
  {
    path: '/ejemplo4',
    name: 'Ejemplo4',
    component: Ejemplo4
  },
  {
    path: '/ejemplo5',
    name: 'Ejemplo5',
    component: Ejemplo5
  },
  {
    path: '/ejemplo6',
    name: 'Ejemplo6',
    component: Ejemplo6
  },
  {
    path: '/ejemplo7',
    name: 'Ejemplo7',
    component: Ejemplo7
  },
  {
    path: '/ejemplo8',
    name: 'Ejemplo8',
    component: Ejemplo8
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
