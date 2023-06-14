<script>
    import axios from 'axios'
    import { defineComponent } from 'vue';
    import DeleteButton from '../components/buttons/DeleteButton.vue';

    export default defineComponent({
        components: {DeleteButton},
        data(){
            return {
                producto: {}
            };
        },
        async mounted(){
            const id = this.$route.params.id;
            const response = await axios.get(`http://localhost:8081/product/${id}`)
            this.productos = response.data.result
            this.productos.Image = "./../../public/" + this.productos.Image

            console.log(response.data.result)
        }
    })
</script>

<template>
    <div class="contenido">
        <div class="img">
            <img :src="this.producto.Image" width="600" height="600"/>
        </div>
        <div class="contenidoItem">
            <label>Nombre:</label>
            <input type="text">
        
            <label>Descripcion:</label>
            <input type="text">
        
            <label>Precio:</label>
            <input type="text">
        
            <label>Categoria:</label>
            <input type="text">
            
            <DeleteButton></DeleteButton>
            
        </div>
    </div>
</template>

<style>
    .contenido{
        display:flex;
        flex-direction: row;   
    }

    .contenidoItem{
        display: flex;
        flex-direction: column;
        margin-left: 5px;
    }

    input{
        font-size: 18px;   
    }

    p{
        font-size: 18px;
    }
</style>