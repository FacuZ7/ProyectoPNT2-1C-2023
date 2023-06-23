<template>
    <button class="logIn-btn" @click="logear()">Iniciar Sesión</button>
</template>

<script>
    import { defineComponent } from 'vue';
    import { useLoginStore } from '../../stores/login.js'
    import axios from 'axios';
    export default defineComponent({
        name: "LogIn",
        setup(){
            const store = useLoginStore();
            const {login} = store;
            return {login};
        },
        methods: {
            async logear(){
                try { 
                    const rta = await axios.post("http://localhost:8081/user/login",this.User)
                    console.log(rta.data.success)
                    if(!rta.data.success){throw new Error(err.message)}

                    alert("Bienvenido!")
                         this.login()
                         this.$router.push("/")
                } catch (err) {
                    throw new Error(err.message)
                }
               
                

                // if(this.User.Name=="a"&& this.User.Password=="a"){
                //         alert("Bienvenido!")
                //         this.login()
                //         this.$router.push("/")
                //     }else{
                //         alert("Usuario incorrecto!")
                // }
                
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