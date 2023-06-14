<template>
    <button class="register-btn" @click="registrarme()">Registrarme</button>
</template>

<script>
    import { defineComponent } from 'vue';
    import axios from 'axios'
    
    export default defineComponent({
        name: "registerButton",
        methods: {
            async registrarme(){
                const rta = await axios.post("http://localhost:8081/user/create",this.User)
                console.log(rta.data)
                alert("Usuario Creado!")
                this.$router.push("/")
            }
        },
        props:['User']    
    })
</script>

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