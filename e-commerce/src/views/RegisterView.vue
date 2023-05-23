<script setup>
    import { RouterLink } from 'vue-router'
    import RegisterButton from '../components/buttons/RegisterButton.vue'
</script>

<template>
    <h1>Register User</h1>
    <div class="content">
        <div class="contentItem">
            <label>Usuario:</label>
            <input type="text">
        </div>
        <div class="contentItem">
            <label>Contraseña:</label>
            <input type="password">
        </div>
        <div class="contentItem">
            <RegisterButton/>
        </div>
        
        <div class="contentItem">
            <p>{{ RegisterButton.name }}</p>
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
</style>