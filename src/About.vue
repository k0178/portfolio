<script setup>
  import Navbar from './components/Navbar.vue'
  import BackToTop from './components/BackToTop.vue';
</script>

<template>
  <Navbar></Navbar>
  <div class="relative">
    <h1 v-motion-slide-left class="min-[1920px]:text-[170px] xl:text-[160px] min-[320px]:text-[80px] text-right absolute xl:top-10 lg:top-10 min-[320px]:top-32 lg:left-3 z-[-1]  drop-shadow-chart-2 italic  uppercase font-bold text-pink-lav ">
      About Me
    </h1>

    <div class="bg-un-blue lg:w-1/2 min-[1280px]:w-3/5 min-[320px]:w-3/4 absolute left-0 z-[-2]  mt-52 p-8 shadow-bittersweet-2 ">
      <div class="  ">
        <p v-motion-pop class=" sm:break-words  text-isabelline italic ">
          A UI / UX Designer who is always able to quickly grasp
          new concepts and is eager to learn the ins and outs of the Information Technology industry.
          <br><br>
          Helped develop website projects that cater to business functionalities such as theme manager, product banners, new product features, customer relationship management,
          point of sale, customer transactions, and human resources. Passionate about building and designing professional websites.
        </p>
        <div  v-motion-pop class=" relative  mt-10 ">
          <label for="me" class="text-6xl text-pink-lav font-bold">Tech Stack</label>
        </div>
        <div  class="flex justify-center mt-10">
          <div v-motion-slide-left class="grid md:grid-cols-4 min-[320px]:grid-cols-3 sm:grid-cols-2 grid-flow-row   gap-16 justify-items-center items-center ">
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'laravel']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'js']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'bootstrap']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'php']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'figma']" />
            <label class="text-isabelline  font-bold ">Tailwind CSS</label>
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'html5']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'css3-alt']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'vuejs']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'react']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'github']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fas', 'database']" />
          </div>
        </div>
      </div>

      <div v-motion-slide-visible-left class="mt-20">
        <label for="me" class="text-6xl mr-8 min-[320px]:break-all text-pink-lav  font-bold">Certification/s</label>
      </div>
      <div v-motion-slide-visible-left class="flex justify-center">
        <div class="mt-5">
          <div class="">
            <div class="flex space-x-4 items-center col-start-2 col-span-2">
              <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'microsoft']" />
              <label  class="text-isabelline  min-[320px]:text-sm lg:text-xl font-bold">Microsoft Technology Associate: Database Administration Fundamentals</label>
            </div>
            <button  class=" mt-3  text-isabelline font-semibold hover:drop-shadow-bittersweet" onclick="location.href='https://www.credly.com/badges/790c00c1-979e-4568-8dd1-74407339605c/public_url'"><font-awesome-icon :icon="['fas', 'certificate']" /> Show Credential</button>
          </div>
    
        </div>
      </div>

      <div v-motion-slide-visible-left class="mt-20">
        <label for="me" class="text-6xl min-[320px]:break-all text-pink-lav  font-bold">Education</label>
      </div>
      <div class=" mt-10">
        <ol class="relative border-l-2 ps-[0.05em] border-dashed border-isabelline mb-16 ">
          <li v-motion-slide-visible-left class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-pink-lav rounded-full mt-1.5 -left-6 dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-isabelline">August 2019 - July 2023</time>
            <h3 class="text-2xl font-semibold text-pink-lav">Adamson University</h3>
            <p class="mb-4 text-base font-normal text-isabelline italic">Graduated as Magna Cum Laude with his Bachelor's degree in Information Technology, he finished his undergraduate studies and managed to develop his skills in web development.
              Also developed a capstone project entitled "True North Auctions: A web-based apparel-centered Online Auction system", which is done for the benefit of True North Garments in Navotas.
            </p>
          </li>
        </ol>
      </div>

      <div v-motion-slide-visible-left class="mt-10">
        <label for="me" class="text-6xl min-[320px]:break-all text-pink-lav font-bold">Events</label>
      </div>
      <div class="flex text-right ">
        <ol class="relative pe-[1.05em] border-r-2 border-dashed border-isabelline mb-16 ">
          <li v-motion-slide-visible-left class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-pink-lav rounded-full mt-1.5 -right-6 dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-isabelline">September 2023</time>
            <h3 class="text-2xl font-semibold text-pink-lav mb-3">UX+ Conference 2023</h3>
            <p class="mb-4 text-base font-normal text-isabelline italic">UX+ Conference 2023 is a 1-day, in-person conference for aspiring and seasoned User Experience professionals. It's a paid in-person event, happening on Sep. 17, 2023, held at SMX Convention Center Manila, Philippines.
              In its 4th year, we've invited the most renowned UX, design, and technology practitioners in the world to speak and share their learnings with the global design community.
            </p>
            <p class=" italic text-isabelline text-xs">https://2023.uxpl.us/#faqs</p>
          </li>
          <li v-motion-slide-visible-left class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-pink-lav rounded-full mt-1.5 -right-6 "></div>
            <time class="mb-1 text-sm font-normal leading-none text-isabelline">June 2022</time>
            <h3 class="text-2xl font-semibold text-pink-lav mb-3">3rd Philippine Skilling Summit</h3>
            <p class="mb-4 text-base font-normal text-isabelline italic">The Philippine Skilling Summit is a free 3-day webinar designed to give attendees a comprehensive look at the most sought-after and highly profitable skills. </p>
          </li>
        </ol>
      </div>

      <div v-motion-slide-visible-left class="">
        <label for="me" class="text-6xl  text-pink-lav font-bold">Career</label>
      </div>
      <div class="mt-10">
        <ol class="relative border-l-2 ps-[0.05em] border-dashed border-isabelline mb-16 ">
          <li v-motion-slide-visible-left class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-pink-lav rounded-full mt-1.5 -left-6"></div>
            <time class="mb-1 text-sm font-normal leading-none text-isabelline">August 2023 - September 2024 </time>
            <div class=" ">
              <div class="">
                <h3 class="text-2xl font-semibold text-pink-lav lg:me-3 sm:me-0">LiveCrossing Corp. (Digital Studio Co., Ltd.)</h3>
                <p class="text-isabelline italic text-sm my-2">A subsidiary company of Digital Studio Co., Ltd. based in Japan and part of the development of Live Commerce and marketing hub across Asia in Makati City, Philippines. Locally developing solutions for inventory linkage such as eBay, Amazon and Lazada.</p>
              </div>
              <p class="mb-4 text-xl font-bold text-pink-lav">as UI / UX Designer</p>
            </div>
            
          </li>
          <li v-motion-slide-visible-left class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-pink-lav rounded-full mt-1.5 -left-6 dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-isabelline">February 2023 - May 2023</time>
            <div class=" ">
              <h3 class="text-2xl font-semibold text-pink-lav lg:me-3 sm:me-0">ROC.PH Digital Marketing Services</h3>
              <p class="text-isabelline italic text-sm my-2">A successful start-up of a Digital Marketing Company based in Cavite, Philippines that offers unlimited website branding and marketing services throughout the country. </p>
              <p class="mb-4 text-xl font-bold text-pink-lav">as Web Developer Intern</p>
            </div>
          </li>
        </ol>
      </div> 
    </div>
  </div>
  <BackToTop/>
</template>




