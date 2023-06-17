<template>
  <div class="relative">
    <h1 class="text-[150px] text-right absolute z-[-1]  sm:break-words break-all opacity-20  uppercase font-bold text-chart drop-shadow-bittersweet ">
      My Projects
    </h1>
  </div>
  <div class="p-16">
    <p class="text-bittersweet text-4xl exact-active-link text-center font-bold"> TRUE NORTH AUCTIONS</p>
  <div class="align-middle w-full flex justify-center mt-4">
    <p class="text-center text-sm sm:break-words text-chart px-4 w-[900px] mb-16 ">
      An Apparel-centered Auction System for the benefit of the True North Garments in Navotas City, Philippines. The capstone project includes different modules
      that fit the company's needs.
      <br><br>
      It includes the Auction System itself, Tokenized Payment, User Modules, Admin Modules, Add-to-cart feature, Checkout, Delivery Tracking. It is also
      integrated with PayPal's 3rd-party API for payment and fund transaction.
    </p>
  </div>
    <p class="text-bittersweet text-1xl text-center mb-10 font-bold"> Swipe the image to see more!!!</p>
    <swiper class="mySwiper mb-16">
      <swiper-slide class="">
          <div class="align-middle w-full flex justify-center">
            <img src="/src/assets/img/truenorth1.png" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
          </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth2.png" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth3.jpeg" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth4.jpeg" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
    </swiper>

    <hr class="border-t-4 border-dashed border-chart drop-shadow-bittersweet mb-16">
    <p class="text-bittersweet text-4xl exact-active-link text-center font-bold"> DUMAGAT</p>
    <p class="text-bittersweet text-1xl text-center mb-10 font-bold"> Swipe to see more!!!</p>
    <swiper class="mySwiper">
      <swiper-slide class="">
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth1.png" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth2.png" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth3.jpeg" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth4.jpeg" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
    </swiper>
    <hr class="border-t-4 border-dashed border-chart drop-shadow-bittersweet mb-16">
    <p class="text-bittersweet text-4xl exact-active-link text-center font-bold"> GREEN AP</p>
    <p class="text-bittersweet text-1xl text-center mb-10 font-bold"> Swipe to see more!!!</p>
    <swiper class="mySwiper">
      <swiper-slide class="">
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth1.png" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth2.png" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth3.jpeg" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth4.jpeg" alt="" class="drop-shadow-bittersweet w-2/3 h-2/3">
        </div>
      </swiper-slide>
    </swiper>
    <hr class="border-t-4 border-dashed border-chart drop-shadow-bittersweet mb-16">

  </div>

</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>
