<script setup>
import { ref } from "vue"
const products = ref([
    {
        id: 0,
        productName: 'clothCard',
        productDescription: 'MENS WEAR'
    },
    {
        id: 1,
        productName: 'headphoneCard',
        productDescription: 'GADGETS'
    },
    {
        id: 2,
        productName: 'shoesCard',
        productDescription: 'FOOT WEAR'
    },
    {
        id: 3,
        productName: 'watchCard',
        productDescription: 'WATCHES'
    },
    {
        id: 4,
        productName: 'FurnitureCard',
        productDescription: 'Furniture'
    },
])
</script>
<template>
    <div class=" my-10 grid grid-cols-5 justify-items-center">
        <div class="flex flex-col" v-for="{ productName, productDescription } in products" key="product.id">
            <img :src="`src/assets/quickLinkImages/${productName}.png`" :alt="`${productName}`">
            <p class=" flex justify-center font-semibold text-sm uppercase">{{ productDescription }}</p>
        </div>

    </div>
</template>