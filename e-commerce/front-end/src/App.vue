<script>
import { RouterLink, RouterView } from 'vue-router'
import { storeToRefs } from 'pinia';
import { useLoginStore } from './stores/login.js';
export default{
  setup(){
        const store = useLoginStore();
        const {isLogin} =storeToRefs(store);
        return {isLogin};
    }
}
</script>

<template>
  <header>
      <nav class="navBar">
        <div class="itemsIzq"> 
          <div class="navItem"><RouterLink to="/">Home</RouterLink></div>
          <div class="navItem"><RouterLink to="/CargaProducto">Cargar Producto</RouterLink></div>
        </div>

        <div class="itemsDer">
          <div class="navItem"><RouterLink v-if="!isLogin" to="/Register">Registrarme</RouterLink></div>
          <div class="navItem"><RouterLink v-if="!isLogin" to="/LogIn">Iniciar Sesión</RouterLink></div>
          <div class="navItem"><RouterLink v-if="isLogin" to="/LogOut">Cerrar Sesión</RouterLink></div>
        </div>
      </nav>
      
      <hr>
  </header>
  <div class="AppContent">
    <RouterView />
  </div>

  
</template>

<style>
  .navBar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 20px;
  }

  .navItem{
    margin: 5px;
  }
  .itemsIzq{
    display: flex;
    flex-direction: row;
  }
  .itemsDer{
    display: flex;
    flex-direction: row;
  }

  hr{
    margin-bottom: 10px;
    border-color: hsla(160, 100%, 37%, 1);
  }

  .AppContent{
    display:flex;
    border: 1px solid red;
    box-sizing: border-box;
    flex-wrap: wrap;
  }
</style>
