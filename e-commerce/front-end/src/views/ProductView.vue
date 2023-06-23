<script>
    import axios from 'axios'
    import { defineComponent } from 'vue';
    import DeleteButton from '../components/buttons/DeleteButton.vue';

    export default defineComponent({
        components: {DeleteButton},
        data(){
            return {
                producto: {},
                category: ""
            };
            
        },
        async mounted(){
            try {
                const id = this.$route.params.id;
                const response = await axios.get(`http://localhost:8081/product/${id}`)
                const {Description} = response.data.result.Category
                this.category = Description;
                this.producto = response.data.result
                this.producto.Image = "./../../public/" + this.producto.Image
                
                
            } catch (error) {
                throw new Error(error)
            }
            
        }
    })
</script>

<template>
    <div v-if="producto">
        <div class="contenido">
            <div class="img">
                <img :src="this.producto.Image" width="600" height="600"/>
            </div>
            <div class="contenidoItem">
                <label>Nombre:</label>
                <input type="text" v-model="producto.Name">
            
                <label>Descripcion:</label>
                <input type="text" v-model="producto.Description">
            
                <label>Precio:</label>
                <input type="text" v-model="producto.UnitPrice"> 
            
                <label>Categoria:</label>
                <input type="text" v-model="category">
                
                <DeleteButton></DeleteButton>
                
            </div>
        </div>
    </div>
    <div v-else>
        <h1>Cargando...</h1>
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