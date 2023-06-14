<script>
import { RouterLink } from 'vue-router'
import LogInButton from '../components/buttons/LogInButton.vue'
import { useLoginStore } from '../stores/login'
import { storeToRefs } from 'pinia'
export default{
    components:{LogInButton},
    setup(){
        const store = useLoginStore();
        const {logout} =store;
        return {logout};
    },
    data(){
    },
    methods:{
        desloguear(){
            alert("Hasta la próxima!")
            this.logout()
            this.$router.push("/")    
            // const rta = await axios.post("http://localhost:8081/user/create",this.User)
            // console.log(rta.data)
        }
    }
}
</script>

<template>
    <div>
    <h1>¿Desea cerrar sesión?</h1>
  </div>
    <div class="content">
        <div class="contentItem">
            <button class="logIn-btn" v-on:click="desloguear">Cerrar Sesión</button>
        </div>
    </div>
</template>

<style>
    .content{
        display:flex;
        flex-direction: column;   
    }

    label{
        display: block;
        width: 100px;
        font-size: 18px;    
    }

    input{
        font-size: 18px;   
    }

    p{
        font-size: 18px;
    }
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