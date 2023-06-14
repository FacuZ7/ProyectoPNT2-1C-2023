<script>
    import { defineComponent } from 'vue';
    import axios from 'axios'
    
    export default defineComponent({
        name: "ProductUploadButton",
        methods: {
            async create(){
                try {
                    const rta = await axios.post("http://localhost:8081/product/create",this.Product)
                    alert("Producto Creado!")
                    this.$router.push("/")
                } catch (error) {
                    console.log(error)
                }   
            }            
        },
        props:['Product']    
    })
</script>

<template>
    <button class="uploadProduct-btn" @click="create()">Cargar Producto</button>
</template>

<style>
    .uploadProduct-btn{
        padding: 5px;
        margin: 5px;
        background-color: transparent;
        color: gray;
        font-size: 20px;
    }

    .uploadProduct-btn:hover{
        background-color: hsla(160, 100%, 37%, 1);
        color: white;
    }
</style>