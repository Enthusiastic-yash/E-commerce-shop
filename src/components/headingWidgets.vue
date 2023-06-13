<script setup>

</script>
<template>
    <div class="w-full flex justify-center py-20">
        <div class="flex flex-col justify-center">
            <h2 class="text-darkCharCoal text-xl md:text-3xl  font-extrabold uppercase text-center ">
                <slot name="heading"></slot>
            </h2>
            <p class="text-darkCharCoal text-xs md:text-lg tracking-widest font-semibold capitalize">
                <slot name="content"></slot>
            </p>

        </div>

    </div>
</template>