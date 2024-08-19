<script setup>

import Navbar from './components/Navbar.vue'
import ProjectList from './components/ProjectList.vue'
</script>
<template>
  <Navbar></Navbar>
  <div class="relative">
    <h1 v-motion-slide-left class="min-[1920px]:text-[170px] xl:text-[160px] min-[320px]:text-[80px] text-right absolute xl:top-10 lg:top-10 min-[320px]:top-32 lg:left-3 z-[-1]  drop-shadow-chart-2 italic  uppercase font-bold text-un-blue ">
      My Works
    </h1>
    <div class="bg-pink-lav lg:w-1/2 min-[1280px]:w-3/5 min-[320px]:w-3/4 absolute left-0 z-[-2]  mt-52 px-5 py-10 shadow-bittersweet-2 "> 
      <ProjectList></ProjectList>
    </div>
  </div>
</template>

