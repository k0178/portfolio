<template>
  <div class="relative">
    <h1 class="text-[150px] text-right absolute z-[-1]  sm:break-words break-all opacity-20  uppercase font-bold text-chart drop-shadow-bittersweet ">
      My Projects
    </h1>
  </div>
  <div class="p-16">
    <p v-motion-pop class="text-bittersweet text-4xl exact-active-link text-center font-bold"> TRUE NORTH AUCTIONS</p>
    <div v-motion-slide-left class="hover:animate-bounce flex justify-center mt-4 ">
      <a href="https://github.com/k0178/TrueNorth" class="text-chart flex  me-2 items-center font-bold hover:text-chart drop-shadow-bittersweet">
        <font-awesome-icon class="me-2 text-xl" :icon="['fab', 'github']" />
        <span class="min-[320px]:text-[12px] md:text-md ">
            GitHub Repository
          </span>
      </a>
    </div>
  <div class="align-middle w-full flex justify-center mt-4">
    <p v-motion-slide-left class="text-center text-sm sm:break-words text-chart px-4 md:w-[600px] mb-16 ">
      An Apparel-centered Auction System for the benefit of the True North Garments in Navotas City, Philippines. The capstone project includes different modules
      that fit the company's needs.
      <br><br>
      It includes the Auction System itself, Tokenized Payment, User Modules, Admin Modules, Add-to-cart feature, Checkout, Delivery Tracking. It is also
      integrated with PayPal's 3rd-party API for payment and fund transaction.
    </p>

  </div>

    <p class="text-bittersweet text-1xl text-center mb-10 font-bold"> Swipe to see more!!!</p>
    <swiper class="mySwiper">
      <swiper-slide class="">
          <div class="align-middle w-full flex justify-center">
            <img src="/src/assets/img/truenorth1.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
          </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth2.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth3.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth4.jpeg" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth5.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth6.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth7.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/truenorth8.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
    </swiper>



    <hr class="border-t-4 border-dashed border-chart drop-shadow-bittersweet mb-16">
    <p  v-motion-pop-visible class="text-bittersweet text-4xl exact-active-link text-center font-bold"> CLOBY'S PHOTOGRAPHY STUDIO</p>
    <div v-motion-slide-left class="hover:animate-bounce flex justify-center mt-4 ">
      <a href="https://www.figma.com/design/vxKY16wFxEkPBE0zyY76Qd/Cloby's-Photography-Studio?node-id=0-1&t=mIZ1OrPJdgW3j4cx-1" class="text-chart flex  me-2 items-center font-bold hover:text-chart drop-shadow-bittersweet">
        <font-awesome-icon class="me-2 text-xl" :icon="['fab', 'figma']" />
        <span class="min-[320px]:text-[12px] md:text-md ">
            UI Design on Figma
          </span>
      </a>
    </div>
    <div class="align-middle w-full flex justify-center mt-4">
      <p  v-motion-slide-visible-left class="text-center text-sm sm:break-words text-chart px-4 md:w-[600px] mb-16 ">
        Designed a business website to accomodate their customers' appointment that matches their product and service.
        <br><br>
        A Self-portrait photography studio based in Imus, Cavite that opened its service recently this year.
        <br>
        <a href="https://ui.adsabs.harvard.edu/abs/2021E%26ES..771a2036M/abstract" class="italic text-2xs text-bittersweet">Source: https://ui.adsabs.harvard.edu/abs/2021E%26ES..771a2036M/abstract</a>
      </p>
    </div>
    <p class="text-bittersweet text-1xl text-center mb-10 font-bold"> Swipe to see more!!!</p>
    <swiper class="mySwiper mb-16">
      <swiper-slide class="">
          <div class="align-middle w-full flex justify-center">
            <img src="/src/assets/img/clobys1.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
          </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/clobys2.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/clobys3.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/clobys4.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/clobys5.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
    </swiper>


<!-- 
    <hr class="border-t-4 border-dashed border-chart drop-shadow-bittersweet mb-16">
    <p  v-motion-pop-visible class="text-bittersweet text-4xl exact-active-link text-center font-bold"> DUMAGAT</p>
    <div class="align-middle w-full flex justify-center mt-4">
      <p  v-motion-slide-visible-left class="text-center text-sm sm:break-words text-chart px-4 md:w-[600px] mb-16 ">
        A developer for the interactive website for the preservation and showcase of the Dumagat-Remontado's culture.
        <br><br>
        Dumagat/Remontados belong to an indigenous community in Rizal Province, Philippines.
        Being the original inhabitants of the forest they have built strong ties to their lands as a result of
        living in the forest for generations.
        <br>
        <a href="https://ui.adsabs.harvard.edu/abs/2021E%26ES..771a2036M/abstract" class="italic text-2xs text-bittersweet">Source: https://ui.adsabs.harvard.edu/abs/2021E%26ES..771a2036M/abstract</a>
      </p>
    </div> -->

    <hr class="border-t-4 border-dashed border-chart drop-shadow-bittersweet mb-16">
    <p v-motion-pop-visible class="text-bittersweet text-4xl exact-active-link text-center font-bold"> GREEN AP</p>
    <div v-motion-slide-visible-left class="hover:animate-bounce flex justify-center mt-4 ">
      <a href="https://greenap-ph.com" class="text-chart flex  me-2 items-center font-bold hover:text-chart drop-shadow-bittersweet">
        <font-awesome-icon class="me-2 text-xl" :icon="['fas', 'globe']" />
        <span class="min-[320px]:text-[12px] md:text-md ">
            Website
          </span>
      </a>
    </div>
    <div class="align-middle w-full flex justify-center mt-4">
      <p v-motion-slide-visible-left class="text-center text-sm sm:break-words text-chart px-4 md:w-[600px] mb-16 ">
        Green Architecture Advocacy Philippines (Green AP) is a civic non-profit organization that is concerned about the environment
        and takes action by promoting sustainable development of the built environment.
      </p>
    </div>
    <p class="text-bittersweet text-1xl text-center mb-10 font-bold"> Swipe to see more!!!</p>
    <swiper class="mySwiper mb-10">
      <swiper-slide class="">
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/greenap-1.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/greenap-2.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/greenap-3.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/greenap-4.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/greenap-5.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/greenap-6.png" alt="" class="drop-shadow-bittersweet md:w-2/3 md:h-2/3 min-[320px]:w-auto min-[320px]:h-auto">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="align-middle w-full flex justify-center">
          <img src="/src/assets/img/greenap-7.png" alt="" class="drop-shadow-bittersweet md:w-1/4 md:h-1/4 min-[320px]:w-auto min-[320px]:h-auto">
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
