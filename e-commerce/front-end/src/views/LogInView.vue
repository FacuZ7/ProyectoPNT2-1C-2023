<script>
import { RouterLink } from 'vue-router'
import LogInButton from '../components/buttons/LogInButton.vue'
import { defineComponent } from 'vue';
export default defineComponent({
    components:{LogInButton}, 
    data(){
        return{
            User:{Login:"",Password:""}
        }
    },
})
</script>

<template>
    <div class="content">
        <div class="contentItem">
            <label>LogIn:</label>
            <input type="text" v-model="this.User.Login">
        </div>
        <div class="contentItem">
            <label>Contraseña:</label>
            <input type="password" v-model="this.User.Password">
        </div>
        <div>
            <LogInButton :User="User"/>
        </div>
        <div class="contentItem">
            <p>Si no tenes usuario <RouterLink to="/Register">hace click acá</RouterLink></p>
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