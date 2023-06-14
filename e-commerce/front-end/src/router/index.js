import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from '../views/LogInView.vue'
import LogOutView from '../views/LogOutView.vue'
import ProductUploadView from '../views/ProductUploadView.vue'
import RegisterView from "../views/RegisterView.vue"
import ProductView from "../views/ProductView.vue"

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
    },
    {
      path: '/LogOut',
      name: 'LogOut',
      component: LogOutView
    },
    {
      path: '/Register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/Product/:id',
      name: 'Product',
      component: ProductView
    }
  ]
})

export default router
