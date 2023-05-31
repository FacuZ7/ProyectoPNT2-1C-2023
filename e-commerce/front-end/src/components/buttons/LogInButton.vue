<template>
    <button class="logIn-btn" @click="logear">Iniciar Sesión</button>
</template>

<script>
    import { defineComponent } from 'vue';
    import axios from 'axios'
    export default defineComponent({
        name: "LogIn",
        methods: {
            async logear(){
                alert("implementar");
                // const rta = await axios.post("http://localhost:8081/user/create",this.User)
                // console.log(rta.data)
            }
        },
        props:['User']    
    })
</script>

<style>
    .logIn-btn{
        padding: 5px;
        margin: 5px;
        background-color: transparent;
        color: gray;
        font-size: 20px;
    }

    .logIn-btn:hover{
        background-color: hsla(160, 100%, 37%, 1);
        color: white;
    }
</style>