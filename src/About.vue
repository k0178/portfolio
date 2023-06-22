<template>
  <div class="relative about">
    <h1 class="text-[150px] text-right absolute z-[-2]  sm:break-words break-all opacity-20  uppercase font-bold text-chart drop-shadow-bittersweet ">
      About Me
    </h1>
  </div>
  <div class="sm:inline-block xl:grid grid-cols-2  gap-4 grid-flow-col align-middle py-16 m-16 ">
    <p class="text-left sm:break-words p-4 text-bittersweet font-bold z-10 mb-16">
      An IT graduate from Adamson University who is always able to quickly grasp
      new concepts and is eager to learn the ins and outs of the Information Technology industry.
      <br><br>
      Helped develop website projects that cater to business functionalities such as customer relationship management,
      point of sale, customer transactions, and human resources. Passionate about building and designing professional websites. <br><br>
      Currently seeking a firm with a group of hardworking professionals that are great to collaborate with and hopefully grow as a professional in the industry.
    </p>
    <div class="justify-center items-center flex space-x-16 sm:mt-8 xl:mt-0  2xl:inline-flex min-[320px]:inline-block sm:inline-flex md:inline-flex">
      <div class="relative sm:mb-16 min-[320px]:mb-16">
        <img src="/src/assets/img/img7.jpg" id="me" alt="" class="drop-shadow-bittersweet z-0 grayscale hover:grayscale-0 " width="300" height="300">
        <div class="absolute -left-3 -top-3">
          <label for="me" class="text-xl text-bittersweet exact-active-link font-bold">
            Kenneth Leanda
          </label>
        </div>
      </div>
      <div class="relative">
        <img src="/src/assets/img/gif1.gif" alt="" class="drop-shadow-bittersweet grayscale hover:grayscale-0" width="300" height="300">
      </div>
    </div>

  </div>
  <div class="flex content-stretch min-[320px]:m-8 md:m-16 text-center">
    <div class="border flex-grow my-auto border-chart border-2 border-dashed drop-shadow-bittersweet"></div>
    <label for="me" class="text-6xl ml-8 text-bittersweet exact-active-link font-bold">Tech Stack</label>
  </div>
  <div class="flex justify-center">
    <div class="grid md:grid-cols-4 min-[320px]:grid-cols-3 sm:grid-cols-2 grid-flow-row mx-16 mb-16 gap-y-16 gap-x-16 justify-items-center items-center ">
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'laravel']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'php']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'js']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'bootstrap']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'figma']" />
      <label class="text-chart drop-shadow-bittersweet font-bold ">Tailwind CSS</label>
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'css3-alt']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'vuejs']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'react']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'github']" />
      <label class="text-chart drop-shadow-bittersweet font-bold ">MySQL</label>
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fas', 'c']" />

    </div>
  </div>


</template>

<script>
export default {
  name: "About"
}
</script>

<style>

</style>