<template>
    <nav class="">
        <!-- <div class="text-gunmetal fixed top-5 left-5">
            <p class="text-xs italic text-un-blue text-left  tracking-tight">Design and Development by Kenneth Leanda.</p>
        </div> -->
        
        <div class="fixed grid grid-cols-1 justify-items-end grid-rows-4 gap-5  right-0 top-1/3 z-40">
            <NavbarIcon
                to="/"
                :icon="['fas', 'house']"
                bgColor="bg-isabelline"
                title="Home"
            />

            <NavbarIcon
                to="/projects"
                :icon="['fas', 'palette']"
                bgColor="bg-pink-lav"
                title="Projects"
            />

            <NavbarIcon
                to="/about"
                :icon="['far', 'id-card']"
                bgColor="bg-un-blue"
                title="About"
            />

            <NavbarIcon
                to="/contact"
                :icon="['fas', 'square-phone']"
                bgColor="bg-turq"
                title="Contact"
            />

        </div>
        <DownloadResume :pdfUrl="pdfUrl" :pdfFileName="pdfFileName" />
        
    </nav>
</template>

<script >
import DownloadResume from './DownloadResume.vue';
import NavbarIcon from './NavbarIcon.vue';
    export default{
        components: {
            DownloadResume,
            NavbarIcon
        },
        data(){
            return{
                pdfUrl: 'files/Kenneth Leanda.pdf',
                pdfFileName: 'Kenneth Leanda.pdf'
            }
        }
    }
</script>

<style scoped>

</style>