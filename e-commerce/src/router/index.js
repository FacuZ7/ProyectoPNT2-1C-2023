import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from '../views/LogInView.vue'
import ProductUploadView from '../views/ProductUploadView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/CargaProducto',
      name: 'CargaProducto',
      component: ProductUploadView
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogInView
    }
  ]
})

export default router
