<template>
    <button class="delete-btn" @click="borrar()">Eliminar</button>
</template>

<script>
    import { defineComponent } from 'vue';
    import axios from 'axios'
    
    export default defineComponent({
        name: "deleteButton",
        methods: {
            async borrar(){
                try {
                    const id = this.$route.params.id; 
                    const rta = await axios.delete(`http://localhost:8081/product/delete/${id}`)
                    console.log(rta.data)
                    alert("Producto Borrado!")
                    this.$router.push("/")   
                } catch (error) {
                    console.log(error)
                }
                
            }
        }   
    })
</script>

<style>
    .delete-btn{
        padding: 5px;
        margin: 5px;
        background-color: transparent;
        color: gray;
        font-size: 20px;
    }

    .delete-btn:hover{
        background-color: rgb(223, 74, 74);
        color: white;
    }
</style>