<script setup>
  import Navbar from './components/Navbar.vue'
  import BackToTop from './components/BackToTop.vue';
  import MainContainer from './components/MainContainer.vue';
</script>

<template>
  <Navbar></Navbar>

  <div v-motion-slide-bottom class="flex min-[320px]:invisible lg:visible  fixed bottom-0 right-0">
    <div class="relative">
      <div class="absolute top-0 left-0 text-right text-gunmetal">
        <label for="" class="text-lg font-bold"> KENNETH LEANDA</label>
        <br>
        <label for="" class="text-xs tracking-wide italic"> UI / UX DESIGNER</label>
      </div>
      <img src="./assets/img/kenneth-nobg.png" class=" grayscale  h-[600px]" alt="">
    </div>
  </div>

  <div class="relative">
    <h1 v-motion-slide-left class="min-[1920px]:text-[170px] xl:text-[160px] min-[320px]:text-[60px] text-right absolute xl:top-10 lg:top-10 min-[320px]:top-40 lg:left-3 z-[-1]  drop-shadow-chart-2 italic  uppercase font-bold text-pink-lav ">
      About Me
    </h1>
    
    <MainContainer boxShadow="shadow-bittersweet-2" bgColor="bg-un-blue">
      <div class="mt-10">
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
        <div  class="mt-10">
          <div v-motion-slide-left class="grid md:grid-cols-4 min-[320px]:grid-cols-3 sm:grid-cols-2 grid-flow-row   gap-12 justify-items-center items-center ">
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'figma']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'laravel']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'js']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'bootstrap']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'php']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'vuejs']" />
            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
              <path fill="white" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"/>
            </svg>
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'html5']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'css3-alt']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'react']" />
            <font-awesome-icon class="text-isabelline  font-bold me-2 text-5xl" :icon="['fab', 'github']" />
            <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24">
              <path fill="white" d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273c.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333c-.04-.047-.046-.094-.08-.14c-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a51 51 0 0 0-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a73 73 0 0 0-.195 4.41H0q.083-2.95.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095q.363 3.024.428 5.53zm4.017-4.08q-.567 3.069-1.492 4.46q-.723 1.074-1.583 1.073q-.228 0-.566-.138v-.494q.166.026.386.026q.402 0 .647-.222q.295-.27.295-.605q0-.233-.23-.944L6.23 14.615h.91l.727 2.36q.247.804.205 1.123q.6-1.598.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5q.136-.113.255-.25q.649-.76.648-2.253q0-2.745-2.155-2.746q-1.056 0-1.65.697q-.646.762-.646 2.245q-.001 1.459.574 2.14q.524.615 1.583.615q.396 0 .725-.098l1.325.772l.36-.622zM15.5 17.588q-.337-.541-.337-1.736q0-2.09 1.27-2.09q.666 0 .977.5q.336.543.336 1.723q0 2.107-1.27 2.108q-.667 0-.978-.5zm-1.658-.425q0 .706-.516 1.156q-.514.45-1.384.45c-.543 0-1.064-.172-1.573-.515l.237-.476q.656.329 1.19.328q.498 0 .783-.22a.75.75 0 0 0 .3-.615c0-.33-.23-.61-.648-.845c-.388-.213-1.163-.657-1.163-.657c-.422-.307-.632-.636-.632-1.177q0-.674.47-1.085q.471-.416 1.22-.415q.769 0 1.4.41l-.213.476a2.7 2.7 0 0 0-1.064-.23q-.425 0-.654.206a.69.69 0 0 0-.248.524c0 .328.234.61.666.85c.393.215 1.187.67 1.187.67c.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188c-.1.04-.26.04-.274.167c.055.053.063.14.11.214c.08.134.218.313.346.407q.208.167.427.31c.26.16.555.255.81.416c.145.094.293.213.44.313c.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214c-.067-.067-.134-.127-.2-.193a3.2 3.2 0 0 0-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106c.227-.06.435-.047.67-.106q.16-.042.32-.094v-.06c-.12-.12-.21-.283-.334-.395a9 9 0 0 0-1.104-.823c-.21-.134-.476-.22-.697-.334c-.08-.04-.214-.06-.26-.127c-.12-.146-.19-.34-.275-.514a18 18 0 0 1-.547-1.163c-.12-.262-.193-.523-.34-.763c-.69-1.137-1.437-1.826-2.586-2.5c-.247-.14-.543-.2-.856-.274c-.167-.008-.334-.02-.5-.027c-.11-.047-.216-.174-.31-.235c-.38-.24-1.364-.76-1.644-.072c-.18.434.267.862.422 1.082c.115.153.26.328.34.5c.047.116.06.235.107.356c.106.294.207.622.347.897c.073.14.153.287.247.413c.054.073.146.107.167.227c-.094.136-.1.334-.154.5c-.24.757-.146 1.693.194 2.25c.107.166.362.534.703.393c.3-.12.234-.5.32-.835c.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555c.206.328.566.668.867.895c.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.5 3.5 0 0 1-.35-.4a9 9 0 0 1-.747-1.218c-.11-.21-.202-.436-.29-.643c-.04-.08-.04-.2-.107-.24c-.1.146-.247.273-.32.453c-.127.288-.14.642-.188 1.01c-.027.007-.014 0-.027.014c-.214-.052-.287-.274-.367-.46c-.2-.475-.233-1.238-.06-1.785c.047-.14.247-.582.167-.716c-.042-.127-.174-.2-.247-.303a2.5 2.5 0 0 1-.24-.427c-.16-.374-.24-.788-.414-1.162c-.08-.173-.22-.354-.334-.513c-.127-.18-.267-.307-.368-.52c-.033-.073-.08-.194-.027-.274c.014-.054.042-.075.094-.09c.088-.072.335.022.422.062c.247.1.455.194.662.334c.094.066.195.193.315.226h.14c.214.047.455.014.655.073c.355.114.675.28.962.46a5.95 5.95 0 0 1 2.085 2.286c.08.154.115.295.188.455c.14.33.313.663.455.982c.14.315.275.636.476.897c.1.14.502.213.682.286c.133.06.34.115.46.188c.23.14.454.3.67.454c.11.076.443.243.463.378"/>
            </svg>
          </div>
        </div>
      </div>

      <div v-motion-slide-visible-left class="mt-20">
        <label for="me" class="text-6xl mr-8 min-[320px]:break-all text-pink-lav  font-bold">Certification/s</label>
      </div>
      <div v-motion-slide-visible-left class="">
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

      <div v-motion-slide-visible-left class="mt-20">
        <label for="me" class="text-6xl min-[320px]:break-all text-pink-lav font-bold">Events</label>
      </div>
      <div class="flex text-left ">
        <ol class="relative pe-[1.05em] border-l-2 border-dashed border-isabelline mb-16 ">
          <li v-motion-slide-visible-left class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-pink-lav rounded-full mt-1.5 -left-6 dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-isabelline">May 2025</time>
            <h3 class="text-2xl font-semibold text-pink-lav mb-3">Gemini for Google Workspace Training</h3>
          </li>
          <li v-motion-slide-visible-left class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-pink-lav rounded-full mt-1.5 -left-6 dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-isabelline">September 2023</time>
            <h3 class="text-2xl font-semibold text-pink-lav mb-3">UX+ Conference 2023</h3>
            <p class="mb-4 text-base font-normal text-isabelline italic">UX+ Conference 2023 is a 1-day, in-person conference for aspiring and seasoned User Experience professionals. It's a paid in-person event, happening on Sep. 17, 2023, held at SMX Convention Center Manila, Philippines.
              In its 4th year, we've invited the most renowned UX, design, and technology practitioners in the world to speak and share their learnings with the global design community.
            </p>
            <p class=" italic text-isabelline text-xs">https://2023.uxpl.us/#faqs</p>
          </li>
          <li v-motion-slide-visible-left class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-pink-lav rounded-full mt-1.5 -left-6 "></div>
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
            <time class="mb-1 text-sm font-normal leading-none text-isabelline">November 2024 - July 2025 </time>
            <div class=" ">
              <div class="">
                <h3 class="text-2xl font-semibold text-pink-lav lg:me-3 sm:me-0">Mobile Care by Power Mac Center</h3>
                <p class="text-isabelline italic text-sm my-2">Includes premium after-sales support and service for Apple products in the Philippines by Power Mac Center.</p>
              </div>
              <p class="mb-4 text-xl font-bold text-pink-lav">as UI / UX Designer</p>
            </div>
            
          </li>
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
    </MainContainer>
  </div>
  <BackToTop/>
</template>




