<script>
  export default{
    data(){
      return{
        Product:{name:"",description:"",unitPrice:"",category:""}
      }
      
    },
    methods:{
      mostrarDatos(){
        alert(`Nombre: ${this.Product.name}, Descipcion: ${this.Product.description}, Precio: ${this.Product.unitPrice}, Categoría:${this.Product.category}`)
      }
    },
  }


</script>
<template>
  <div>
    <h1>CARGAR PRODUCTO</h1>
  </div>
  <div class="content">
        
        <div class="contentItem">
            <label>Nombre:</label>
            <input type="text" v-model="this.Product.name">
        </div>
        <div class="contentItem">
            <label>Descripcion:</label>
            <input type="text" v-model="this.Product.description">
        </div>
        <div class="contentItem">
            <label>Precio:</label>
            <input type="text" v-model="this.Product.unitPrice">
        </div>
        <div class="contentItem">
            <label>Categoria:</label>
            <input type="text" v-model="this.Product.category">
        </div>
        <div class="contentItem">
            <label>CARGAR IMAGEN¿?</label>
            <input type="text" placeholder="VER DESPUES">
        </div>
        <div class="contentItem">
          <button class="register-btn" v-on:click="mostrarDatos">Cargar Producto</button>
        </div>
        
    </div>
</template>

<style>
.register-btn{
        padding: 5px;
        margin: 5px;
        background-color: transparent;
        color: gray;
        font-size: 20px;
    }

    .register-btn:hover{
        background-color: hsla(160, 100%, 37%, 1);
        color: white;
    }

</style>