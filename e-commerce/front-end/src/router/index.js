import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from '../views/LogInView.vue'
import ProductUploadView from '../views/ProductUploadView.vue'
import RegisterView from "../views/RegisterView.vue"
import axios from 'axios'

axios.get('/pruebaAxios')
  .then(function(res){
    console.log("hola")
  })
  .catch(function(){
    console.log("todo mal")
  })

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
      path: '/Register',
      name: 'Register',
      component: RegisterView
    }
  ]
})

export default router
