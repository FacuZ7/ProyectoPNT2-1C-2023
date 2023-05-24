<script setup>
    import ProductItem from './ProductItem.vue'
    import ZapatillaAdidas from './images/ZapatillaAdidas.vue'
    import GuitarraCombo from './images/GuitarraCombo.vue'
    import BicicletaVenzo from './images/BicicletaVenzo.vue'
    import BateriaAuto from './images/BateriaAuto.vue'
 
</script>

<template>
    <ProductItem>
        <template #image> <ZapatillaAdidas /></template>
        <template #icon>Foto</template>
        <template #heading>Zapatillas Adidas</template>
        Zapatillas normales!!!
        <template #price>$30.000</template>
    </ProductItem>

    <ProductItem>
        <template #image> <GuitarraCombo /></template>
        <template #icon>Foto</template>
        <template #heading>Guitarra Leonard LE362</template>
        Combo de guitarra + parlante + accesorios
        <template #price>$120.000</template>
    </ProductItem>

    <ProductItem>
        <template #image> <BicicletaVenzo /></template>
        <template #icon>Foto</template>
        <template #heading>Bicicleta Venzo R29</template>
        Bicicleta Venzo R29 de 21Vel
        <template #price>$170.000</template>
    </ProductItem>

    <ProductItem>
        <template #image> <BateriaAuto /></template>
        <template #icon>Foto</template>
        <template #heading>Bateria Good Year</template>
        Bateria Good Year Ultra de 12V
        <template #price>$35.000</template>
    </ProductItem>
    
</template>

<styles>

</styles>