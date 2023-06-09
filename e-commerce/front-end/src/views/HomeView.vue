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
                    <template #image><img :src="producto.image" width="200"/></template>
                    <template #title>{{producto.name}}</template>
                    <template #description>{{producto.description}}</template>
                    <template #price>{{producto.unitPrice}}</template>
                </ProductCard>
            </div>        
        </div>
    </main>
</template>

<style>
    .mainPage{
        display: flex;
        justify-content: space-around;
    }
</style>
