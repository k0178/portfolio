<template>
    <nav class="">
        <div class="text-gunmetal fixed top-5 right-5">
            <p class="text-xs italic text-un-blue text-right  tracking-tight">Design and Development by Kenneth Leanda. <br> Using free hosting by Vercel</p>
        </div>
        
        <div class="fixed grid grid-cols-1 grid-rows-4 gap-3  min-[1920px]:w-1/4 xl:w-1/4 min-[320px]:w-1/3 lg:h-96 min-[320px]:h-56  right-0 top-1/4 z-40 text-chart">
            <router-link to="/projects" class="bg-pink-lav hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal">
            <div class="flex absolute top-3 right-3 items-center gap-3">
                <label for="" class="lg:text-3xl min-[320px]:text-sm tracking-tighter"> MY WORKS</label>
                <font-awesome-icon class="lg:text-3xl min-[320px]:text-sm" :icon="['fas', 'up-right-from-square']" />
            </div>
            </router-link>
            <router-link to="/about" class="bg-un-blue hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal"> 
            <div class="flex absolute top-3 right-3 items-center gap-3">
                <label for="" class="text-3xl tracking-tighter lg:text-3xl min-[320px]:text-sm"> ABOUT ME</label>
                <font-awesome-icon class="lg:text-3xl min-[320px]:text-sm" :icon="['fas', 'up-right-from-square']" />
            </div>
            </router-link>
            <router-link to="/contact" class="bg-turq hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal">
            <div class="flex absolute top-3 right-3 items-center gap-3">
                <label for="" class="text-3xl tracking-tighter lg:text-3xl min-[320px]:text-sm"> CONTACTS</label>
                <font-awesome-icon class="lg:text-3xl min-[320px]:text-sm " :icon="['fas', 'up-right-from-square']" />
            </div>
            </router-link>
            <DownloadResume :pdfUrl="pdfUrl" :pdfFileName="pdfFileName" />
        </div>
        
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