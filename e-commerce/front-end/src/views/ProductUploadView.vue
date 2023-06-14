<script>
    import ProductUploadButton from '../components/buttons/ProductUploadButton.vue';
    import { defineComponent } from 'vue';
    export default defineComponent({
        components: {ProductUploadButton},
        data(){
            return {
                Product: {Name: '',Description: '', UnitPrice: '',Image:'', CategoryId:''}
            }
        },
        methods: {
            async guardarImagen(){
              
            }
        }
    })
</script>

<template>
  <div class="content">
        
        <div class="contentItem">
            <label>Titulo:</label>
            <input type="text" v-model="Product.Name">
        </div>
        <div class="contentItem">
            <label>Descripcion:</label>
            <textarea class="DescriptionTxt" v-model="Product.Description"></textarea>
        </div>
        <div class="contentItem">
            <label>Precio:</label>
            <input type="text" v-model="Product.UnitPrice">
        </div>
        <div class="contentItem">
            <label>Categoria:</label>
            <input type="text" v-model="Product.CategoryId">
        </div>
        <div class="contentItem">
            <label>Imagen:</label>
            <input type="file">
        </div>
        <div class="contentItem">
          <ProductUploadButton :Product="Product"/>
        </div>
        
    </div>
</template>

<style>
  .DescriptionTxt{
      width: 500px;
      height: 200px;
  }

</style>