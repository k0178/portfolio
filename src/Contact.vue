<template>
  <div class="relative ">
    <h1 class="text-[150px]  text-right absolute z-[-2]  sm:break-words break-all opacity-20  uppercase font-bold text-chart drop-shadow-bittersweet ">
      My Contacts
    </h1>
  </div>

  <div class="p-16  text-center justify-center mt-4">

    <div class="grid grid-cols-4 mt-5 gap-4">
      <div class="hover:animate-bounce">
        <a href="https://github.com/k0178" class="text-chart font-bold hover:text-chart drop-shadow-bittersweet"><font-awesome-icon class="me-2 text-5xl" :icon="['fab', 'github']" /></a>
      </div>
      <div class="hover:animate-bounce">
        <a href="https://www.linkedin.com/in/leandakenneth/" class="text-chart font-bold hover:text-chart drop-shadow-bittersweet"><font-awesome-icon class="me-2 text-5xl" :icon="['fab', 'linkedin']" /></a>
      </div>
      <div class="hover:animate-bounce">
        <a href="https://leandakenneth@gmail.com" class="text-chart font-bold hover:text-chart drop-shadow-bittersweet"><font-awesome-icon class="me-2 text-5xl" :icon="['fas', 'envelope']" />
        </a>
      </div>
      <div class="hover:animate-bounce">
        <a href="https://messenger.com/t/100000781930453" class="text-chart font-bold hover:text-chart drop-shadow-bittersweet"><font-awesome-icon class="me-2 text-5xl" :icon="['fab', 'facebook-messenger']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>