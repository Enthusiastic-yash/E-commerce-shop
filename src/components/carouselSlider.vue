<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from "vue"
const carouselImages = ref(['Audio', 'Clothes', 'Shoes', 'Watch'])


</script>
<template>
    <Carousel :autoplay="2000" :wrap-around="true">
        <Slide v-for=" slide in carouselImages" :key="slide">
            <div class="carousel__item">
                <img :src="`src/assets/slideImages/${slide}.png`" alt="Images">
            </div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
    </Carousel>
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
}
</style>