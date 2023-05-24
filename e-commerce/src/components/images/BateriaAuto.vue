<template>
    <div>
      <img :src="imageSrc" alt="Bateria" width="200"/>
    </div>
  </template>
  
  <script>
  import MiImagen from '@/assets/bateria_auto.jpg';
  
  export default {
    data() {
      return {
        imageSrc: MiImagen,
      };
    },
  };
  </script>
  