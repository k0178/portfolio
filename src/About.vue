<template>
  <div class="relative">
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

    <div class="justify-center items-center flex space-x-16 sm:mt-8 xl:mt-0  2xl:inline-flex sm:inline-flex md:inline-flex">
      <div class="relative sm:mb-16">
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
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

</style>