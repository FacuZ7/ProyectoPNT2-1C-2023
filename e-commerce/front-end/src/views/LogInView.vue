<script setup>
import { RouterLink } from 'vue-router'
import LogInButton from '../components/buttons/LogInButton.vue'
</script>

<template>
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
            <LogInButton/>
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
</style>