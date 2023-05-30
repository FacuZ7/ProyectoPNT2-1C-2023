<script></script>

<template>
    <div class="content">
        <div class="contentItem">
            <img src="../assets/zapatillas_adidas.jpg" alt="Zapatillas" width="200">
        </div>
        <div class="contentItem">
            <label>Nombre:</label>
            <input type="text">
        </div>
        <div class="contentItem">
            <label>Descripcion:</label>
            <input type="text">
        </div>
        <div class="contentItem">
            <label>Precio:</label>
            <input type="text">
        </div>
        <div class="contentItem">
            <label>Categoria:</label>
            <input type="text">
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