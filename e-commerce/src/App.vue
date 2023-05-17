<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="navBar">
        <div class="itemsIzq"> 
          <div class="navItem"><RouterLink to="/">Home</RouterLink></div>
          <div class="navItem"><RouterLink to="/CargaProducto">Vender</RouterLink></div>
        </div>

        <div class="itemsDer">
          <div class="navItem"><RouterLink to="/LogIn">Registrarme</RouterLink></div>
          <div class="navItem"><RouterLink to="/LogIn">Iniciar Sesión</RouterLink></div>
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
    border: 2px solid white;
  }
</style>
