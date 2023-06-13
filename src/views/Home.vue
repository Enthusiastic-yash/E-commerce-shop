<script setup>
import CarouselSlider from "@/components/carouselSlider.vue"
import QuickLink from "@/components/quickLink.vue"
import HeadingWidgets from "@/components/headingWidgets.vue"
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


    </div>
  </main>
</template>

