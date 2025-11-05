<template>
  <Navbar></Navbar>

  <div class="relative">
    <h1 v-motion-slide-left class="min-[1920px]:text-[170px] xl:text-[160px] min-[320px]:text-[60px] text-left absolute xl:top-10 lg:top-10 min-[320px]:top-32  lg:left-3 z-[-1]  drop-shadow-chart-2 italic  uppercase font-bold text-gunmetal ">
      Contact Me
    </h1>
    <MainContainer bgColor="bg-turq" boxShadow="shadow-bittersweet-2">
      <div class="p-8  flex justify-start mt-4">
        <div class="grid md:grid-cols-2 mt-5 lg:gap-12 sm:gap-y-16 min-[320px]:grid-cols-1 min-[320px]:gap-16 ">
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
              /
              <font-awesome-icon class="mx-2 text-5xl" :icon="['fab', 'slack']" />
              /
              <svg class="me-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0,0,256,256">
              <g fill="#00272B" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M20,2c-3.59,0 -6.5,2.91 -6.5,6.5c0,3.59 2.91,6.5 6.5,6.5c3.59,0 6.5,-2.91 6.5,-6.5c0,-3.59 -2.91,-6.5 -6.5,-6.5zM36.5,6c-3.038,0 -5.5,2.462 -5.5,5.5c0,3.038 2.462,5.5 5.5,5.5c3.038,0 5.5,-2.462 5.5,-5.5c0,-3.038 -2.462,-5.5 -5.5,-5.5zM15.7207,18c-3.11,0 -5.74023,2.12 -6.49023,5h9.26953c3.03,0 5.5,2.47 5.5,5.5v11c0,3.03 -2.47,5.5 -5.5,5.5h-4.68945c1.81,1.26 4.00867,2 6.38867,2h13.52148c-1.67,-1.47 -2.7207,-3.62 -2.7207,-6v-16.2793c0,-3.71 -3.0107,-6.7207 -6.7207,-6.7207zM31.59961,20c0.89,1.35 1.40039,2.9807 1.40039,4.7207v16.2793c0,3.29 2.65945,5.97 5.93945,6c3.28,-0.04 5.92969,-2.71 5.92969,-6v-14.21094c0,-3.75 -3.04883,-6.78906 -6.79883,-6.78906zM7.5,25c-1.933,0 -3.5,1.567 -3.5,3.5v11c0,1.933 1.567,3.5 3.5,3.5h11c1.933,0 3.5,-1.567 3.5,-3.5v-11c0,-1.933 -1.567,-3.5 -3.5,-3.5zM9.21289,29h7.57422v1.83398h-2.66406v8.16602h-2.24609v-8.16602h-2.66406z"></path></g></g>
              </svg>
              <span class="md:text-lg md:break-words sm:break-all  min-[320px]:break-all">
              leandakenneth@gmail.com
            </span>
            </a>
          </div>
          <div v-motion-pop  class="hover:animate-bounce">
            <a class="text-gunmetal  font-bold  flex items-center ">
              <font-awesome-icon class="me-2 text-5xl" :icon="['fas', 'mobile']" />
              /
              <font-awesome-icon class="mx-2 text-5xl" :icon="['fab', 'viber']" />
              <span class="min-[320px]:text-[12px] md:text-lg ">
                +63 927 8738 525
            </span>
            </a>
          </div>
          <div v-motion-pop  class="hover:animate-bounce">
            <a href="https://www.behance.net/leandakenneth" class="text-gunmetal flex  me-2 items-center font-bold ">
              <font-awesome-icon class="me-2 text-5xl" :icon="['fab', 'square-behance']" />
              <span class="min-[320px]:text-[12px] md:text-lg ">
                leandakenneth
            </span>
            </a>
          </div>
        </div>
      </div>
    </MainContainer>
  </div>

</template>

<script setup>
  import Navbar from './components/Navbar.vue';
  import MainContainer from './components/MainContainer.vue';

</script>

<style scoped>

</style>