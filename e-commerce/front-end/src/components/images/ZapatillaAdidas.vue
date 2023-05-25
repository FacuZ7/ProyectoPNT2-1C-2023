<template>
    <div>
      <img :src="imageSrc" alt="Zapatillas" width="200"/>
    </div>
  </template>
  
  <script>
  import MiImagen from '@/assets/zapatillas_adidas.jpg';
  
  export default {
    data() {
      return {
        imageSrc: MiImagen,
      };
    },
  };
  </script>
  