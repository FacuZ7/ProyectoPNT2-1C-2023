<script setup>
    import ProductCard from '../components/ProductCard.vue'

    //------------------------------------------------------------//
    import ZapatillaAdidas from './../components/images/ZapatillaAdidas.vue'
    import GuitarraCombo from './../components/images/GuitarraCombo.vue'
    import BicicletaVenzo from './../components/images/BicicletaVenzo.vue'
    import BateriaAuto from './../components/images/BateriaAuto.vue'
</script>

<template>
    <main>
        <div class="mainPage">
            <ProductCard id="1">  
                <template #image> <ZapatillaAdidas /></template>
                <template #title>Zapatillas Adidas</template>
                <template #description>Zapatillas normales!!!</template>
                <template #price>$30.000</template>
            </ProductCard>

            <ProductCard id="2">
                <template #image> <GuitarraCombo /></template>
                <template #title>Guitarra Leonard LE362</template>
                <template #description>Combo de guitarra + parlante + accesorios</template>
                <template #price>$120.000</template>
            </ProductCard>

            <ProductCard id="3">  
                <template #image> <BicicletaVenzo /></template>
                <template #title>Bicicleta Venzo R29</template>
                <template #description>Bicicleta Venzo R29 de 21Vel</template>
                <template #price>$170.000</template>
            </ProductCard>

            <ProductCard id="4">
                <template #image> <BateriaAuto /></template>
                <template #title>Bateria Good Year</template>
                <template #description>Bateria Good Year Ultra de 12V</template>
                <template #price>$35.000</template>
            </ProductCard>
        </div>
    </main>
</template>

<style>
    .mainPage{
        display: flex;
        justify-content: space-around;
    }
</style>
