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
            try {
                const id = this.$route.params.id;
                const response = await axios.get(`http://localhost:8081/product/${id}`)
                this.producto = response.data.result
                this.producto.Image = "./../../public/" + this.producto.Image
                console.log(response.data.result)
                
            } catch (error) {
                console.log(error)
            }
            
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
            <input type="text">{{ producto.Name }}
        
            <label>Descripcion:</label>
            <input type="text"> {{ producto.Name }}
        
            <label>Precio:</label>
            <input type="text"> {{ producto.Name }}
        
            <label>Categoria:</label>
            <input type="text"> {{ producto.CategoryId }}
            
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