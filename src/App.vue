<template>
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

<style>

</style>

