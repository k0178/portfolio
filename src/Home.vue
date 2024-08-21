<template>
  <div class="">
    <div class="bg-chart min-[320px]:w-full min-[320px]:h-4/5 lg:w-1/3 lg:h-4/5 absolute z-[-2] bottom-0 left-0 shadow-bittersweet-2"> 
      <img src="./assets/img/kenneth-nobg.png" class="drop-shadow-img grayscale hover:grayscale-0 min-[320px]:h-[600px] lg:h-auto xl:h-auto min-[1920px]:h-auto  absolute bottom-0 left-0" alt="">
      <div class=" absolute top-5 right-5 text-right text-gunmetal ">
        <label for="" class="xl:text-xl min-[1920px]:text-3xl min-[320px]:text-lg tracking-widest font-bold"> KENNETH LEANDA</label>
        <br>
        <label for="" class="text-xs tracking-wide italic"> UI / UX DESIGNER</label>
      </div>
    </div>
    <Navbar></Navbar>
    <h1 class="portfolio min-[320px]:text-[90px] lg:text-[350px] xl:-bottom-36 italic absolute min-[1920px]:-bottom-36 min-[320px]:bottom-0  uppercase font-bold text-gunmetal m-0 p-0">
        Portfolio
    </h1>
  </div>
</template>


<script setup>

import Navbar from './components/Navbar.vue'
</script>

<style scoped>


</style>