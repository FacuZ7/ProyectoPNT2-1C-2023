<script>
import { useLoginStore } from '../../stores/login.js';
import { defineComponent } from 'vue';
import axios from 'axios';
export default defineComponent({
    setup(){
        const store = useLoginStore();
        const {logout} =store;
        return {logout};
    },
    methods:{
        async desloguear(){
            try {
                const rta = await axios.post("http://localhost:8081/user/logout")
                console.log(rta.data)
                this.logout()
                alert("Hasta la próxima!")
                this.$router.push("/") 

            } catch (err) {
                throw new Error(err.message)
            }
        }
    }
})
</script>

<template>
    <button class="logOut-btn" v-on:click="desloguear">Cerrar Sesión</button>
</template>

<style>
    .logOut-btn{
        padding: 5px;
        margin: 5px;
        background-color: transparent;
        color: gray;
        font-size: 20px;
    }

    .logOut-btn:hover{
        background-color: hsla(160, 100%, 37%, 1);
        color: white;
    }
</style>