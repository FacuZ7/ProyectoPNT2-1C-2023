<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "productItem",
        methods: {
            redirect(){
                this.$router.push(`/Product/${this.id}`)
            }
        },
        props:['id']
    })
</script>

<template>
    <div class="card" @click="redirect()">
        <div class="prodImg"><slot name="image"></slot></div>
        <h3 class="prodTitle"><slot name="title"></slot></h3>
        <p class="prodDesc"><slot name="description"></slot></p>
        <p class="prodPrice"><slot name="price"></slot></p>

        <!-- <div class="buttons">
            <button class="comprar"></button>
            <button class="carrito"></button>
        </div> -->
    </div>
</template>

<style>
    .card{
        border-radius: 10px;
        background-color: gray;
        transition: transform 0.3s;
        margin: 5px;
        
    }

    .buttons{
        border: 1px solid red;
    }

    .card>div{
        width: 200px;
        height: 200px;
    }

    .card:hover{
        transform: scale(1.11);
    }

    .prodTitle{
        font-size: 18px;
        margin-top: 10px;
        font-weight: bold;
    }

    .prodDesc {
        font-size: 14px;
        margin-top: 5px;
    }

    .prodPrice {
        font-size: 25px;
        margin-top: 5px;
        color: hsla(160, 100%, 37%, 1);
        font-weight: bold;
    }
</style>