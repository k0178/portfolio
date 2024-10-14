
<template>
  <Navbar></Navbar>
  <div class="relative">
    <h1 v-motion-slide-left class=" min-[1920px]:text-[170px] xl:text-[160px] min-[320px]:text-[60px] text-right absolute xl:top-10 lg:top-10 min-[320px]:top-40 lg:left-3 z-[-1]  drop-shadow-chart-2 italic  uppercase font-bold text-un-blue ">
      My Works
    </h1>
    <MainContainer bgColor="bg-pink-lav" boxShadow="shadow-bittersweet-2">
      <ProjectList></ProjectList>
    </MainContainer>
      
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue'
  import ProjectList from './components/ProjectList.vue'
  import MainContainer from './components/MainContainer.vue';

  export default{
    components:{
      Navbar,
      ProjectList,
      MainContainer
    }
  }
</script>

