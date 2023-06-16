<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/views/Header.vue"
import Footer from "@/views/footer.vue"
</script>

<template>
  <!-- Header -->
  <div class="relative min-h-screen">
    <Header />
    <RouterView />
    <!-- Footer -->
    <Footer />
  </div>
</template>


