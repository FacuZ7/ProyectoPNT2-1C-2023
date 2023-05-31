<script>
    import { defineComponent } from 'vue';
    import RegisterButton from '../components/buttons/RegisterButton.vue'
    export default defineComponent({
        components: {RegisterButton},
        data(){
            return {
                User: {login: '',name: '', lastName: '',email:'', contraseña:''}
            }
        } 
    })
</script>

<template>
    <div class="content">
        <div class="contentItem">
            <label>Login:</label>
            <input type="text" v-model="User.login">
        </div>

        <div class="contentItem">
            <label>Nombre:</label>
            <input type="text" v-model="User.name">
        </div>

        <div class="contentItem">
            <label>Apellido:</label>
            <input type="email" v-model="User.lastName">
        </div>

        <div class="contentItem">
            <label>Email:</label>
            <input type="text" v-model="User.email">
        </div>

        <div class="contentItem">
            <label>Contraseña:</label>
            <input type="password" v-model="User.contraseña">
        </div>
        
        <div class="contentItem">
            <RegisterButton :User="User"/>
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
    
</style>