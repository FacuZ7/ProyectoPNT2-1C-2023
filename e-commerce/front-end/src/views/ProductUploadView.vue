<script>
  export default{
    data(){
      return{
        Product:{name:"",description:"",unitPrice:"",category:""}
      }
    }
  }


</script>
<template>
  <div>
    <h1>CARGAR PRODUCTO</h1>
  </div>
  <div class="content">
        
        <div class="contentItem">
            <label>Nombre:</label>
            <input type="text" v-model="Product.name">
        </div>
        <div class="contentItem">
            <label>Descripcion:</label>
            <input type="text" v-model="Product.description">
        </div>
        <div class="contentItem">
            <label>Precio:</label>
            <input type="text" v-model="Product.unitPrice">
        </div>
        <div class="contentItem">
            <label>Categoria:</label>
            <input type="text" v-model="Product.category">
        </div>
        <div class="contentItem">
            <label>CARGAR IMAGEN¿?</label>
            <input type="text" placeholder="VER DESPUES">
        </div>
        <div class="contentItem">
          <button>Cargar Producto</button>
        </div>
        
    </div>
</template>

<style>

</style>