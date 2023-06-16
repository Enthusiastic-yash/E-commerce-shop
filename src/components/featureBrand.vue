<script setup>
import { ref } from "vue"
const products = ref([
    {
        id: 0,
        productName: 'feature1',
        productOffer: 'Min.30% OFF'
    },
    {
        id: 1,
        productName: 'feature2',
        productOffer: 'flat 50% OFF'
    },
    {
        id: 2,
        productName: 'feature3',
        productOffer: 'upto 40% OFF'
    },
    {
        id: 3,
        productName: 'feature4',
        productOffer: 'upto 50% OFF'
    },
    {
        id: 4,
        productName: 'feature5',
        productOffer: 'upto 30% OFF'
    },
    {
        id: 5,
        productName: 'feature6',
        productOffer: 'upto 20% OFF'
    },
])

</script>
<template>
    <div class="grid  grid-cols-1  sm:grid-cols-2 pb-20 mb-36 md:mb-24">
        <div class="flex  flex-col justify-center my-14 cursor-pointer" v-for="product in products">
            <img :src="`src/assets/featureImages/${product.productName}.png`" alt="feature"
                class="hover:scale-105 transition duration-1000 ease-in-out">
            <h1 class="mt-10 text-center font-extrabold text-lg md:text-xl uppercase">{{ product.productOffer }}</h1>
        </div>
    </div>
</template>