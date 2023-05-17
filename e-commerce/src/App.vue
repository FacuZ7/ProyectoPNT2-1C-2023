<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav class="navBar">
        <div class="navItem"><RouterLink to="/">Home</RouterLink></div>
        <div class="navItem"><RouterLink to="/CargaProducto">Cargar Producto</RouterLink></div>
        <div class="navItem"><RouterLink to="/LogIn">LogIn</RouterLink></div>
      </nav>
  </header>
  <div>
    <RouterView />
  </div>

  
</template>

<style>
  .navBar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid white;
  }

  .navItem{
    border: 2px solid red;
  }
</style>
