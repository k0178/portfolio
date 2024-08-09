<template>
  <div class="h-screen flex items-center justify-center" v-motion-pop>
    <div class="lg:relative sm:">
      <h1 class="portfolio text-[180px] break-all mx-16 uppercase text-center font-bold text-chart break-words">
        Portfolio
      </h1>  
      <!-- <p class="font-jetbrains  font-bold px-4  py-2 rounded-e-full border-un-blue border-4  drop-shadow-pink-lav bg-turq lg:absolute text-un-blue lg:top-0 lg:left-32">UI / UX Design and Development</p> -->
      <p class="font-jetbrains text-sm  font-bold px-2  py-1 rounded-e-full border-un-blue border-4 drop-shadow-turq bg-chart lg:absolute text-un-blue lg:bottom-4 lg:right-16">Designed and Developed by Kenneth Leanda</p>
      <font-awesome-icon :icon="['far', 'file-code']" class="text-un-blue text-[130px] -z-10 drop-shadow-chart-2 absolute top-0 left-0" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}

</script>

<style scoped>

</style>