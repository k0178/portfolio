<template class="" >
  <nav class="grid grid-cols-1 top-0 left-0 gap-10  z-50  content-center absolute">
    <router-link to="/" active-class="active-link" exact-active-class="exact-active-link" class="flex items-center rounded-e-full p-3 bg-isabelline border-2 border-pink-lav drop-shadow-pink-lav-2"><font-awesome-icon :icon="['fas', 'house']" class="text-pink-lav me-2" /><label for="" class="text-pink-lav font-bold">Home</label> </router-link>
    <router-link to="/projects" active-class="active-link" exact-active-class="exact-active-link" class="flex items-center rounded-e-full p-3 bg-chart drop-shadow-bittersweet"><font-awesome-icon :icon="['fas', 'palette']" class="text-un-blue me-2" /><label for="" class="text-un-blue font-bold">Projects</label></router-link>
  </nav>

  <nav class="grid grid-cols-1 top-0 right-0 gap-10  z-50  content-center absolute">
    <router-link to="/about" active-class="active-link" exact-active-class="exact-active-link" class="flex items-center rounded-s-full p-3 bg-chart drop-shadow-bittersweet"><font-awesome-icon :icon="['fas', 'address-card']" class="text-un-blue me-2" /><label for="" class="text-un-blue font-bold">About</label></router-link>
    <router-link to="/contact" active-class="active-link" exact-active-class="exact-active-link" class="flex items-center rounded-s-full p-3 bg-chart drop-shadow-bittersweet"><font-awesome-icon :icon="['fas', 'square-phone-flip']" class="text-un-blue me-2" /><label for="" class="text-un-blue font-bold">Contact</label></router-link>
  </nav>


<router-view v-slot="{ Component }" >
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </router-view>

</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import {RouterView, RouterLink} from 'vue-router'

onMounted(() => {
    initFlowbite();
})

</script>






 <!-- <template>
  <nav class="grid grid-cols-1 top-56 left-0 gap-5 w-12 z-50 content-center absolute">
    <router-link
      to="/"
      active-class="active-link"
      exact-active-class="exact-active-link"
      class="router-link-custom"
    >
      <font-awesome-icon :icon="['fas', 'house']" class="text-un-blue" />
      <span class="tooltip-text">Home</span>
    </router-link>
    <router-link
      to="/projects"
      active-class="active-link"
      exact-active-class="exact-active-link"
      class="router-link-custom"
    >
      <font-awesome-icon :icon="['fas', 'palette']" class="text-un-blue" />
      <span class="tooltip-text">Projects</span>
    </router-link>
    <router-link
      to="/about"
      active-class="active-link"
      exact-active-class="exact-active-link"
      class="router-link-custom"
    >
      <font-awesome-icon :icon="['fas', 'address-card']" class="text-un-blue" />
      <span class="tooltip-text">About</span>
    </router-link>
    <router-link
      to="/contact"
      active-class="active-link"
      exact-active-class="exact-active-link"
      class="router-link-custom"
    >
      <font-awesome-icon :icon="['fas', 'square-phone-flip']" class="text-un-blue" />
      <span class="tooltip-text">Contact</span>
    </router-link>
  </nav>

  <router-view v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </router-view>
</template> -->

<!-- <script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { RouterView, RouterLink } from 'vue-router'

onMounted(() => {
  initFlowbite();
})
</script> -->

<style>
.router-link-custom {
  position: relative;
  display: inline-block;
  padding: 3px;
  border-radius: 0 1rem 1rem 0;
  /* background-color: var(--chart-color); */
  /* box-shadow: var(--drop-shadow-bittersweet); */
  transition: width 0.3s;
  overflow: hidden;
}

.router-link-custom:hover {
  width: 10rem; 
}

.tooltip-text {
  visibility: hidden;
  width: 120px;
  /* background-color: var(--chart-color); */
  /* color: var(--un-blue); */
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; 
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

.router-link-custom:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>

