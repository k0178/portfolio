<template>
  <div class="border-4 border-dashed border-chart ">
    <nav class="break-words mt-12">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center ml-3 text-sm text-white-500 text-bittersweet md:hidden hover:text-chart focus:outline-none  dark:text-gray-400" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden w-full md:block md:w-screen" id="navbar-default">
          <ul class="grid grid-cols-4 grid-flow-col  gap-4 font-bold text-chart flex flex-col text-center ">
            <li class="hover:animate-bounce">
              <router-link to="/" active-class="active-link" exact-active-class="exact-active-link" class="no-underline hover:drop-shadow-bittersweet text-left">Home</router-link>
            </li>
            <li class="hover:animate-bounce">
              <router-link to="/projects" active-class="active-link" exact-active-class="exact-active-link" class="no-underline hover:drop-shadow-bittersweet text-right ">Projects</router-link>
            </li>
            <li class="hover:animate-bounce">
              <router-link to="/about" active-class="active-link" exact-active-class="exact-active-link"  class="no-underline hover:drop-shadow-bittersweet   " >About</router-link>
            </li>
            <li class="hover:animate-bounce">
              <router-link to="/contact" active-class="active-link" exact-active-class="exact-active-link" class="no-underline hover:drop-shadow-bittersweet  ">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <hr class="border-t-4 border-dashed border-chart drop-shadow-bittersweet my-8">

      <router-view v-slot="{ Component }" >
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </router-view>


    <footer class="hide pb-16 px-16">
      <p class="text-[12px] text-chart text-center sm:text-center dark:text-gray-400"> <br>Developed by Kenneth Leanda. <br>© 2023 All Rights Reserved.
      </p>
    </footer>

  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import {RouterView, RouterLink} from 'vue-router'
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})

</script>



