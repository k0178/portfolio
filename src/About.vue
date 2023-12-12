<template>
  <div class="relative">
    <h1 class="text-[150px] text-right absolute z-[-2]  sm:break-words break-all opacity-20  uppercase font-bold text-chart drop-shadow-bittersweet ">
      About Me
    </h1>
  </div>

  <div class="sm:inline-block xl:grid grid-cols-2  gap-4 grid-flow-col align-middle py-16 m-16 ">

      <p v-motion-pop class="text-left sm:break-words p-4 text-bittersweet font-bold z-10 mb-16">
        An IT graduate from Adamson University who is always able to quickly grasp
        new concepts and is eager to learn the ins and outs of the Information Technology industry.
        <br><br>
        Helped develop website projects that cater to business functionalities such as customer relationship management,
        point of sale, customer transactions, and human resources. Passionate about building and designing professional websites. <br><br>
        Currently seeking a firm with a group of hardworking professionals that are great to collaborate with and hopefully grow as a professional in the industry.
      </p>


    <div v-motion-pop class="justify-center items-center flex space-x-16 sm:mt-8 xl:mt-0  2xl:inline-flex min-[320px]:inline-block sm:inline-flex md:inline-flex">
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
  
  <div  v-motion-pop-visible class="flex relative content-stretch min-[320px]:m-8 md:m-16 text-center">
   
    <div class="border flex-grow my-auto border-chart border-2 border-dashed drop-shadow-bittersweet"></div>
    <label for="me" class="text-6xl ml-8 text-bittersweet exact-active-link font-bold">Tech Stack</label>
  </div>
  <div  class="flex justify-center">
    <div v-motion-slide-visible-left class="grid md:grid-cols-4 min-[320px]:grid-cols-3 sm:grid-cols-2 grid-flow-row mx-16 mb-16 gap-y-16 gap-x-16 justify-items-center items-center ">
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'laravel']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'php']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'js']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'bootstrap']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'figma']" />
      <label class="text-chart drop-shadow-bittersweet font-bold ">Tailwind CSS</label>
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'html5']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'css3-alt']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'vuejs']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'react']" />
      <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'github']" />
      <label class="text-chart drop-shadow-bittersweet font-bold ">MySQL</label>
    </div>
  </div>

  <div v-motion-slide-visible-left class="flex content-stretch min-[320px]:m-8 md:m-16 text-center">
    <label for="me" class="text-6xl mr-8 min-[320px]:break-all text-bittersweet exact-active-link font-bold">Certifications</label>
    <div class="border flex-grow my-auto border-chart border-2 border-dashed drop-shadow-bittersweet"></div>
  </div>
  <div v-motion-slide-visible-left class="flex justify-center">
    <div class="grid md:grid-cols-1 min-[320px]:grid-cols-1 sm:grid-cols-2 grid-flow-row mx-16 mb-16 gap-y-16 gap-x-16 justify-items-center items-center ">
      <div class="text-center">
        <div class="flex space-x-4 items-center col-start-2 col-span-2">
          <font-awesome-icon class="text-chart drop-shadow-bittersweet font-bold me-2 text-5xl" :icon="['fab', 'microsoft']" />
          <label  class="text-bittersweet  min-[320px]:text-sm lg:text-xl font-bold">Microsoft Technology Associate: Database Administration Fundamentals</label>
        </div>
        <button  class="bg-none rounded-full px-2 mt-3  text-chart font-semibold hover:drop-shadow-bittersweet border-2 border-chart" onclick="location.href='https://www.credly.com/badges/790c00c1-979e-4568-8dd1-74407339605c/public_url'"><font-awesome-icon :icon="['fas', 'certificate']" /> Show Credential</button>
      </div>

    </div>
  </div>

  <div v-motion-slide-visible-left class="flex content-stretch min-[320px]:m-8 md:m-16 text-center">
    <div class="border flex-grow my-auto border-chart border-2 border-dashed drop-shadow-bittersweet"></div>
    <label for="me" class="text-6xl ml-8 min-[320px]:break-all text-bittersweet exact-active-link font-bold">Education</label>
  </div>
  <div class="flex justify-center sm:px-16 min-[320px]:px-16 lg:px-48">
    <ol class="relative border-l-2 border-dashed border-bittersweet dark:border-gray-700 mb-16 ">
      <li v-motion-slide-visible-left class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-chart rounded-full mt-1.5 -left-6 dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-chart">July 2023</time>
        <h3 class="text-2xl font-semibold text-bittersweet">Adamson University</h3>
        <p class="mb-4 text-base font-normal text-chart">Graduated as Magna Cum Laude with his Bachelor's degree in Information Technology, he finished his undergraduate studies and managed to develop his skills in web development.
          Also developed a capstone project entitled "True North Auctions: A web-based apparel-centered Online Auction system", which is done for the benefit of True North Garments in Navotas.
        </p>
      </li>
      <li v-motion-slide-visible-left class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-chart rounded-full mt-1.5 -left-6 dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-chart">March 2019</time>
        <h3 class="text-2xl font-semibold text-bittersweet">Siena College Quezon City</h3>
        <p class="mb-4 text-base font-normal text-chart">Finished his secondary and Senior Highschool in a Catholic-Dominican school managed by the Sisters of St. Catherine of Siena located at Del Monte Ave., Quezon City.</p>
      </li>
      <li v-motion-slide-visible-left class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-chart rounded-full mt-1.5 -left-6 dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-chart">March 2013</time>
        <h3 class="text-2xl font-semibold text-bittersweet">San Jose Elementary School</h3>
        <p class="mb-4 text-base font-normal text-chart">Finished Primary School in a local elementary school located at Tendido St. Cor. Mauban Quezon City. Achieved the 4th Honorable Mention with the class of 2012-2013.</p>
      </li>
    </ol>
  </div>

  <div v-motion-slide-visible-left class="flex content-stretch min-[320px]:m-8 md:m-16 text-center">
    <label for="me" class="text-6xl min-[320px]:break-all text-bittersweet exact-active-link font-bold">Events</label>
    <div class="border ms-8 flex-grow my-auto border-chart border-2 border-dashed drop-shadow-bittersweet"></div>
  </div>
  <div class="flex text-right sm:px-16 min-[320px]:px-16 lg:px-48">
    <ol class="relative pe-[1.05em] border-r-2 border-dashed border-bittersweet dark:border-gray-700 mb-16 ">
      <li v-motion-slide-visible-left class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-chart rounded-full mt-1.5 -right-6 dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-chart">September 2023</time>
        <h3 class="text-2xl font-semibold text-bittersweet mb-3">UX+ Conference 2023</h3>
        <p class="mb-4 text-base font-normal text-chart">UX+ Conference 2023 is a 1-day, in-person conference for aspiring and seasoned User Experience professionals. It's a paid in-person event, happening on Sep. 17, 2023, held at SMX Convention Center Manila, Philippines.
In its 4th year, we've invited the most renowned UX, design, and technology practitioners in the world to speak and share their learnings with the global design community.
        </p>

        <p class=" italic text-bittersweet text-xs">https://2023.uxpl.us/#faqs</p>
      </li>
      <li v-motion-slide-visible-left class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-chart rounded-full mt-1.5 -right-6 dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-chart">June 2022</time>
        <h3 class="text-2xl font-semibold text-bittersweet mb-3">3rd Philippine Skilling Summit</h3>
        <p class="mb-4 text-base font-normal text-chart">The Philippine Skilling Summit is a free 3-day webinar designed to give attendees a comprehensive look at the most sought-after and highly profitable skills. </p>
      </li>
    </ol>
  </div>




</template>




