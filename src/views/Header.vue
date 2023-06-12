<script setup>

</script>
<template>
    <header class="w-full bg-lightBlack text-white flex justify-center fixed z-50 ">
        <ul class="max-w-7xl h-14 grid items-center  justify-items-center  grid-cols-12 gap-x-20">

            <RouterLink to="/" class="col-start-1 col-end-3">
                <div class="flex items-center w-28   justify-center ">
                    <font-awesome-icon size="2xl" icon="fa-solid fa-store" class="text-lightPink" />
                    <li class="pl-2 font-semibold ">E-Store</li>
                </div>
            </RouterLink>

            <li class="font-bold text-sm capitalize col-start-3 col-end-5">
                <RouterLink to="/about">Categories</RouterLink>
            </li>
            <li class="col-span-3 relative w-full col-start-5 col-end-9">
                <div class="absolute pl-2 pt-2">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-lightGray2 " />
                </div>
                <input type="search" placeholder="search for Products" class="h-10 bg-lightGray focus:bg-white outline-none rounded-md pl-10 text-darkBlack w-full placeholder:text-md
                    font-bold text-sm capitalize
                    ">
            </li>
            <li class="font-bold text-sm capitalize">
                <font-awesome-icon icon="fa-regular fa-heart" size="xl"
                    class="hover:text-2xl cursor-pointer ease-in-out duration-300" />
            </li>
            <li class="font-bold text-sm capitalize  relative cursor-pointer ">

                <span
                    class="w-4 h-4 rounded-full bg-lightPink text-white absolute left-4 bottom-2 text-center text-xs ">1</span>
                <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl" />
            </li>
            <li class="font-bold text-sm capitalize">
                <a href="#">User</a>
            </li>
        </ul>
    </header>
</template>