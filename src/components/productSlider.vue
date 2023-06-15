<script setup>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from "vue"
const settings = ref({

    itemsToShow: 1,
    snapAlign: 'center',

})

const breakpoints = ref({
    700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
    },

    500: {
        itemsToShow: 3,
        snapAlign: 'center'
    },
    1024: {
        itemsToShow: 5,
        snapAlign: 'start',
    },
})

const props = defineProps(['products'])

</script>
<template>
    <div class="py-10">
        <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true">

            <Slide v-for="product in props.products" :key="product.id">
                <div>
                    <div class="carousel__item">
                        <img :src="`src/assets/greatDealImages/${product.productName}.png`" alt="{{product.productName}}">
                    </div>
                    <p class="font-extrabold uppercase text-xl">{{ product.productDescription }}</p>
                </div>
            </Slide>

            <template #addons>
                <Navigation />
            </template>

        </Carousel>
    </div>
</template>
<style scoped>
.carousel__item {
    height: auto;
    width: 100%;
    background-color: greenyellow;
    color: black;
    font-size: 20px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel__item img {
    width: 100%;
}

.carousel__slide {
    padding: 10px;
}

.carousel__prev,
.carousel__next {
    box-sizing: content-box;
    border: 5px solid white;
    background-color: red;

}
</style>