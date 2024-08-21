<template>
    <nav class="">
        <div class="text-gunmetal fixed top-5 right-5">
            <p class="text-xs italic text-un-blue text-right  tracking-tight">Design and Development by Kenneth Leanda. <br> Using free hosting by Vercel</p>
        </div>
        
        <div class="fixed grid grid-cols-1 grid-rows-5 gap-5  min-[1920px]:w-1/4 xl:w-1/4 min-[320px]:w-14 lg:h-96 min-[320px]:h-72  right-0 top-1/4 z-40 text-chart">
            <router-link to="/" class="bg-bole flex items-center justify-end hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal transition duration-300">
                <div class="flex items-center gap-3 me-3">
                    <label for="" class="lg:text-3xl min-[320px]:text-sm tracking-tighter lg:visible min-[320px]:invisible"> HOME</label>
                    <font-awesome-icon class="lg:text-2xl min-[320px]:text-2xl" :icon="['fas', 'house']" />
                </div>
            </router-link>
            <router-link to="/projects" class="bg-pink-lav flex items-center justify-end hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal transition duration-300">
                <div class="flex items-center gap-3 me-3">
                    <label for="" class="lg:text-3xl min-[320px]:text-sm tracking-tighter lg:visible min-[320px]:invisible"> PROJECTS</label>
                    <font-awesome-icon class="lg:text-2xl min-[320px]:text-2xl" :icon="['fas', 'palette']" />
                </div>
            </router-link>
            <router-link to="/about" class="bg-un-blue flex items-center justify-end hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal transition duration-300">
                <div class="flex items-center gap-3 me-3">
                    <label for="" class="lg:text-3xl min-[320px]:text-sm tracking-tighter lg:visible min-[320px]:invisible"> ABOUT ME</label>
                    <font-awesome-icon class="lg:text-2xl min-[320px]:text-2xl" :icon="['fas', 'address-card']" />
                </div>
                </router-link>
            <router-link to="/contact" class="bg-turq flex items-center justify-end hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal transition duration-300">
                <div class="flex items-center gap-3 me-3">
                    <label for="" class="lg:text-3xl min-[320px]:text-sm tracking-tighter lg:visible min-[320px]:invisible"> CONTACT ME</label>
                    <font-awesome-icon class="lg:text-2xl min-[320px]:text-2xl" :icon="['fas', 'phone']" />
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