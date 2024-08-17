<script setup>

import Navbar from './components/Navbar.vue'
import ProjectList from './components/ProjectList.vue'
</script>
<template>
  <Navbar></Navbar>
  <div class="relative">
    <h1 v-motion-slide-left class="text-[170px] text-right absolute top-10 left-3 z-[-1]  sm:break-words break-all  drop-shadow-chart-2 italic  uppercase font-bold text-un-blue ">
      My Works
    </h1>
    <div class="bg-pink-lav w-1/2 absolute left-0 z-[-2]  mt-52 px-10 py-20 shadow-bittersweet-2 "> 
      <ProjectList></ProjectList>
    </div>
  </div>
</template>

