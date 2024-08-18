<template>
  <Navbar></Navbar>

  <div class="relative">
    <h1 v-motion-slide-left class="text-[170px] text-right absolute top-10 left-3 z-[-1]  sm:break-words break-all  drop-shadow-chart-2 italic  uppercase font-bold text-gunmetal ">
      Contact Me
    </h1>
    <div class="bg-turq w-1/2 absolute left- z-[-2]  mt-52 px-10 py-20 shadow-bittersweet-2">
      <div class="p-8  flex justify-center mt-4">
        <div class="grid md:grid-cols-2 mt-5 lg:gap-28 sm:gap-y-16 min-[320px]:grid-cols-1 min-[320px]:gap-16 ">
          <div v-motion-pop  class="hover:animate-bounce">
            <a href="https://github.com/k0178" class="text-gunmetal flex  me-2 items-center font-bold ">
              <font-awesome-icon class="me-2 text-5xl" :icon="['fab', 'github']" />
              <span class="min-[320px]:text-[12px] md:text-lg ">
                k0178
            </span>
            </a>
          </div>
          <div v-motion-pop  class="hover:animate-bounce">
            <a href="https://www.linkedin.com/in/leandakenneth/" class="flex items-center me-2 text-gunmetal font-bold ">
              <font-awesome-icon class="me-2 text-5xl" :icon="['fab', 'linkedin']" />
              <span class="min-[320px]:text-[12px] md:text-lg ">
                Kenneth Leanda
            </span>
            </a>
          </div>
          <div v-motion-pop  class="hover:animate-bounce">
            <a class="text-gunmetal flex items-center font-bold min-[320px]:text-[12px] ">
              <font-awesome-icon class="me-2 text-5xl" :icon="['fas', 'envelope']" />
              <span class="md:text-lg md:break-words sm:break-all  min-[320px]:break-all">
              leandakenneth@gmail.com
            </span>
            </a>
          </div>
          <div v-motion-pop  class="hover:animate-bounce">
            <a class="text-gunmetal  font-bold  flex items-center ">
              <font-awesome-icon class="me-2 text-5xl" :icon="['fas', 'mobile']" />
              <span class="min-[320px]:text-[12px] md:text-lg ">
                +63 927 8738 525
            </span>
            </a>
          </div>
          <div v-motion-pop  class="hover:animate-bounce">
            <a class="text-gunmetal  font-bold  flex items-center ">
              <font-awesome-icon class="me-2 text-5xl" :icon="['fab', 'viber']" />
              <span class="min-[320px]:text-[12px] md:text-lg ">
                +63 927 8738 525
            </span>
            </a>
          </div>
          <div v-motion-pop  class="hover:animate-bounce">
            <a href="" class="text-gunmetal flex  me-2 items-center font-bold ">
              <font-awesome-icon class="me-2 text-5xl" :icon="['fab', 'slack']" />
              <span class="min-[320px]:text-[12px] md:text-lg ">
                leandakenneth@gmail.com
            </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
  import Navbar from './components/Navbar.vue';
</script>

<style scoped>

</style>