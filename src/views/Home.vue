<script setup>
import CarouselSlider from "@/components/carouselSlider.vue"
import QuickLink from "@/components/quickLink.vue"
import HeadingWidgets from "@/components/headingWidgets.vue"
import productSlider from "@/components/productSlider.vue"
import Banner from "@/components/banner.vue"
import { ref } from "vue"
const products = ref([
  {
    id: 0,
    productName: 'girlClothes',
    productDescription: 'Min. 50% OFF'

  },
  {
    id: 1,
    productName: 'menWatch',
    productDescription: 'UP TO 60% OFF'
  },
  {
    id: 2,
    productName: 'runningShoes',
    productDescription: 'UP TO 60% OFF'
  },
  {
    id: 3,
    productName: 'sofa',
    productDescription: 'UP TO 45% OFF'
  },
  {
    id: 4,
    productName: 'whiteHeadphone',
    productDescription: 'Min. 20% OFF'
  }
]);
const Brands = ref([
  {
    id: 0,
    productName: 'adidas',
    productDescription: 'Min. 50% OFF'

  },
  {
    id: 1,
    productName: 'blackWatch',
    productDescription: 'UP TO 60% OFF'
  },
  {
    id: 2,
    productName: 'girlFashion',
    productDescription: 'UP TO 60% OFF'
  },
  {
    id: 3,
    productName: 'storageCase',
    productDescription: 'UP TO 45% OFF'
  },
  {
    id: 4,
    productName: 'vrGlass',
    productDescription: 'Min. 20% OFF'
  }
])
</script>

<template>
  <main class="pt-12 bg-lightGray3 ">
    <CarouselSlider />
    <div class="max-w-7xl m-auto">
      <!-- Quick links  -->
      <QuickLink />
      <!-- Heading  -->
      <HeadingWidgets>
        <template #heading>
          <h2>DEALS WHEEL</h2>
        </template>
        <template #content>
          <p>Grab these before they're gone</p>
        </template>
      </HeadingWidgets>
      <!-- product Slider -->
      <productSlider :products="products"></productSlider>
      <!-- Banner -->
      <Banner></Banner>
      <!-- Brands slider -->
      <productSlider :products="Brands" class="pb-20"></productSlider>
    </div>
  </main>
</template>

