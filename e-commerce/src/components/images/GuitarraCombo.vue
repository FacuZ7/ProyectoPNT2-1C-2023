<template>
    <div>
      <img :src="imageSrc" alt="Guitarra" width="200"/>
    </div>
  </template>
  
  <script>
  import MiImagen from '@/assets/guitarra_combo.jpg';
  
  export default {
    data() {
      return {
        imageSrc: MiImagen,
      };
    },
  };
  </script>
  