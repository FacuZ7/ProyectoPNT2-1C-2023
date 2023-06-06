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
    <div class="card" @click="redirect">
        <slot name="image"></slot>
        <slot name="title"></slot>
        <slot name="description"></slot>
        <slot name="price"></slot>
    </div>
</template>

<style>
    .card{
        border-radius: 10px; background-color: gray; padding: 20px;
        max-width: 240px;
        transition: transform 0.3s;
    }

    .card:hover{
        transform: scale(1.11);
    }
</style>