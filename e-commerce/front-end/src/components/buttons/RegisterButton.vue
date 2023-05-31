<template>
    <button class="register-btn" @click="registrarme">Registrarme</button>
</template>

<script>
    import { defineComponent } from 'vue';
    import axios from 'axios'
    export default defineComponent({
        name: "registerButton",
        methods: {
            registrarme(){
                //alert(JSON.stringify(this.User));
                axios.post("http://localhost:8081/user/create",()=>{
                    JSON.stringify(this.User)
                }).then((res)=>{
                    console.log(res)
                }).catch((err)=>{
                    console.log(err)
                })
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