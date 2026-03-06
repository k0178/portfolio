
<template>
  <Navbar></Navbar>

  <div v-motion-slide-bottom class="flex min-[320px]:invisible lg:visible  fixed bottom-0 right-0">
    <div class="relative">
      <div class="absolute top-0 left-0 text-right text-gunmetal">
        <label for="" class="text-lg font-bold"> KENNETH LEANDA</label>
        <br>
        <label for="" class="text-xs tracking-wide italic"> WEB DESIGNER</label>
      </div>
      <img src="/img/kenneth-nobg.png" class=" grayscale  h-[600px]" alt="">
    </div>
  </div>

  <div class="relative">
    <h1 v-motion-slide-left class=" min-[1920px]:text-[170px] xl:text-[160px] min-[320px]:text-[60px] text-right absolute xl:top-10 lg:top-10 min-[320px]:top-40 lg:left-3 z-[-1]  drop-shadow-chart-2 italic  uppercase font-bold text-un-blue ">
      My Works
    </h1>
    <MainContainer bgColor="bg-pink-lav" boxShadow="shadow-bittersweet-2">
    <ProjectList></ProjectList>
    <p class="text-gunmetal text-md font-bold text-center mb-3">Want to see more of my work?</p>
    <div class="w-full flex justify-center items-center">
      <CTAButton
        label="Check out my Projects in"
        icon="fab fa-behance" 
        to="https://www.behance.net/leandakenneth/projects"
        class="mb-10"
      />
    </div>
    <MoreProjects></MoreProjects>
    </MainContainer>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import ProjectList from './components/ProjectList.vue'
  import MainContainer from './components/MainContainer.vue';
  import CTAButton from './components/CTAButton.vue';
  import MoreProjects from './components/MoreProjects.vue';

  export default{
    components:{
      Navbar,
      ProjectList,
      CTAButton,
      MainContainer,
      MoreProjects
    }
  }
</script>

