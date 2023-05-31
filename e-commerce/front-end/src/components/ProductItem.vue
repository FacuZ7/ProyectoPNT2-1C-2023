<template>
    <div class="item" @click="click">
        <div class="productImage">
            <slot name="image"></slot>
        </div>
            
        <div class="details">
            <h3>
                <slot name="heading"></slot>
            </h3>
            <slot></slot>

            <h2>
                <slot name="price"></slot>
            </h2> 
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: "productItem",
        methods: {
            click(){
                alert("click")
            }
        }  
    })
</script>

<style>
    .item{
        border-radius: 10px; background-color: gray; padding: 20px;
        max-width: 240px;
        margin-right: 50px;
        transition: transform 0.3s;
    }

    .item:hover{
        transform: scale(1.11);
    }
</style>