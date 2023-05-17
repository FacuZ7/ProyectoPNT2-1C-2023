<template>
    <button class="register-btn" @click="registrarme">Registrarme</button>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "registerButton",
        methods: {
            registrarme(){
                alert("todo ok");
            }
        }
    })
</script>

<style>
    .register-btn{
        padding: 5px;
        margin: 5px;
        background-color: transparent;
        color: gray;
    }

    .register-btn:hover{
        background-color: hsla(160, 100%, 37%, 1);
        color: white;
    }
</style>