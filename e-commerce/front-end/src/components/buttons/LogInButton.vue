<template>
    <button class="logIn-btn" @click="logear()">Iniciar Sesión</button>
</template>

<script>
    import { defineComponent } from 'vue';
    import axios from 'axios'
    import { useLoginStore } from '../../stores/login.js'
    export default defineComponent({
        name: "LogIn",
        setup(){
            const store = useLoginStore();
            const {login} =store;
            return {login};
        },
        methods: {
            async logear(){
                if(this.User.name=="TestUser"&& this.User.password=="TestPassword"){
                        alert("Bienvenido!")
                        this.login()
                        this.$router.push("/")
                    }else{
                        alert("Usuario incorrecto!")
                    }
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