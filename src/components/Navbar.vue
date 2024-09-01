<template>
    <nav class="">
        <!-- <div class="text-gunmetal fixed top-5 left-5">
            <p class="text-xs italic text-un-blue text-left  tracking-tight">Design and Development by Kenneth Leanda.</p>
        </div> -->
        
        <div class="fixed grid grid-cols-1 justify-items-end grid-rows-4 gap-5 min-[1920px]:w-1/5 xl:w-1/5 min-[320px]:w-16 lg:h-1/3 min-[320px]:h-72  right-0 top-1/3 z-40 text-chart">
            <router-link v-motion-slide-right to="/" class="bg-bole rounded-s-lg p-3 w-14 flex items-center justify-end hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal transition duration-300">
                <font-awesome-icon class="lg:text-2xl min-[320px]:text-2xl" :icon="['fas', 'house']" />
            </router-link>
            <router-link v-motion-slide-right to="/projects" class="bg-pink-lav rounded-s-lg p-3 w-14 flex items-center justify-end hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal transition duration-300">
                <font-awesome-icon class="lg:text-2xl min-[320px]:text-2xl" :icon="['fas', 'palette']" />
            </router-link>
            <router-link v-motion-slide-right to="/about" class="bg-un-blue rounded-s-lg p-3 w-14 flex items-center justify-end hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal transition duration-300">
                <font-awesome-icon class="lg:text-2xl min-[320px]:text-2xl" :icon="['far', 'id-card']" />
            </router-link>
            <router-link v-motion-slide-right to="/contact" class="bg-turq rounded-s-lg p-3 w-14 flex items-center justify-end hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal transition duration-300">
                <font-awesome-icon class="lg:text-2xl min-[320px]:text-2xl" :icon="['fas', 'square-phone']" />
            </router-link>
        </div>
        <DownloadResume :pdfUrl="pdfUrl" :pdfFileName="pdfFileName" />
        
    </nav>
</template>

<script >
    import DownloadResume from './DownloadResume.vue';
    export default{
        components: {
            DownloadResume
        },
        data(){
            return{
                pdfUrl: 'files/Kenneth_Leanda_Resume.pdf',
                pdfFileName: 'Kenneth_Leanda_Resume.pdf'
            }
        }
    }
</script>

<style scoped>

</style>