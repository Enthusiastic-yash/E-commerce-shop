<script setup>
import { onMounted } from "vue"
import lottie from 'lottie-web';
import animationData from '../lottieAnimation/animationData.json';

onMounted(() => {
    const container = document.getElementById('lottie-container');
    const anim = lottie.loadAnimation({
        container,
        renderer: 'svg', // or 'canvas', 'html'
        animationData: animationData,
        loop: true, // set to false if you don't want looping
        autoplay: true, // set to false if you want to control playback manually
    });
})


</script>
<template>
    <div class="py-20">
        <div class="w-auto   sm:w-4/5 m-auto bg-gradient-to-t from-lightCoral to-white rounded-full bg-blend-lighten ">
            <div class="flex flex-col justify-center">
                <div class="flex  justify-evenly items-center py-5">
                    <KeepAlive>
                        <div id="lottie-container" class="h-20 md:h-28"></div>
                    </KeepAlive>
                    <h1 class=" text-base md:text-4xl font-extrabold ">Brands to Grab</h1>
                </div>
            </div>
        </div>
    </div>
</template>