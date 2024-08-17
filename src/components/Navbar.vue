<template>
    <nav class="">
        <div class="text-gunmetal">
            <a href="/" class="text-lg fixed top-5 left-5 tracking-[20px]">KENNETH LEANDA</a>
            <p class="text-lg fixed top-5 right-5 tracking-[20px]">UI / UX DESIGN</p>
        </div>
        
        <div class="fixed grid grid-cols-1 grid-rows-3  w-1/4 h-72  right-0 top-1/3 z-40 text-chart">
            <router-link to="/projects" class="bg-pink-lav hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal">
            <div class="flex absolute top-3 right-3 items-center gap-3">
                <label for="" class="text-3xl tracking-tighter"> MY WORKS</label>
                <font-awesome-icon class="text-2xl" :icon="['fas', 'up-right-from-square']" />
            </div>
            </router-link>
            <router-link to="/about" class="bg-un-blue hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal"> 
            <div class="flex absolute top-3 right-3 items-center gap-3">
                <label for="" class="text-3xl tracking-tighter"> ABOUT ME</label>
                <font-awesome-icon class="text-2xl" :icon="['fas', 'up-right-from-square']" />
            </div>
            </router-link>
            <router-link to="/contact" class="bg-turq hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal">
            <div class="flex absolute top-3 right-3 items-center gap-3">
                <label for="" class="text-3xl tracking-tighter"> CONTACTS</label>
                <font-awesome-icon class="text-2xl " :icon="['fas', 'up-right-from-square']" />
            </div>
            </router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>