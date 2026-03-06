<template>
  <router-view v-slot="{ Component }" >
    <Transition name="fade">
      <component :is="Component" />
    </Transition>
  </router-view>
  <Analytics />
</template>

<script setup>
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'
  import {RouterView, RouterLink} from 'vue-router'
  import { Analytics } from '@vercel/analytics/vue'

  onMounted(() => {
      initFlowbite();
  })
</script>

<style>

</style>

