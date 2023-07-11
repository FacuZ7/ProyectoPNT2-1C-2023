<script>
    import ProductCard from '../components/ProductCard.vue'
    import axios from 'axios'
    import { defineComponent } from 'vue';
    export default defineComponent({
        components:{ProductCard},
        data(){
            return {
                productos: []
            };
        },
        async mounted(){
            const response = await axios.get('http://localhost:8081/product')
            this.productos = response.data.respuesta
        }
        
    })

</script>

<template>
    <main>
        <div class="mainPage">
            <div class="productCards" v-for="producto in productos">
                <ProductCard :id = producto.id>  
                    <template #image><img :src="producto.Image"/></template>
                    <template #title>{{producto.Name}}</template>
                    <template #description>{{producto.Description}}</template>
                    <template #price>{{'$' + producto.UnitPrice}}</template>
                </ProductCard>
            </div>        
        </div>
    </main>
</template>

<style>
    .mainPage{
        display: flex;
        justify-content: start;
        width: 100%;
        flex-wrap: wrap;
    }

    img{
        object-fit:cover;
        width: 100%;
        height: 100%;
    }
</style>
