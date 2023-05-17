<script setup>
    import ProductItem from './ProductItem.vue'
    import ZapatillaAdidas from './images/ZapatillaAdidas.vue'
</script>

<template>
    <ProductItem>
        <template #image> <ZapatillaAdidas /></template>
        <template #icon>Foto</template>
        <template #heading>Zapatillas Adidas</template>
        Zapatillas normales!!!
        <template #price>$30.000</template>
    </ProductItem>
</template>

<styles>

</styles>