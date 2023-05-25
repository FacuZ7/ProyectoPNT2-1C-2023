<template>
    <div>
      <img :src="imageSrc" alt="Bicicleta" width="200"/>
    </div>
  </template>
  
  <script>
  import MiImagen from '@/assets/bicicleta_venzo.jpg';
  
  export default {
    data() {
      return {
        imageSrc: MiImagen,
      };
    },
  };
  </script>
  