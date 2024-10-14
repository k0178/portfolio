<template>
    <button v-motion-slide-right @click="downloadResume()" class="resume-btn z-40 fixed text-xs top-4 right-0  bg-gunmetal hover:drop-shadow-bittersweet-2 text-chart p-4 transition duration-300">
        <div class="flex items-center  gap-3">
            <font-awesome-icon class="lg:text-xl min-[320px]:text-2xl" :icon="['fas', 'download']" />
            <label for="" class="lg:text-xl min-[320px]:text-sm tracking-tighter"> Download my Resume</label>
        </div>
    </button>
</template>

<script>
    export default {
        name: 'DownloadResume',
        props: {
            pdfUrl: {
                type: String,
                required: true
            },
            pdfFileName: {
                type: String,
                required: true,
            }
        },
        methods: {
            downloadResume() {
                const link = document.createElement('a');
                link.href = this.pdfUrl;
                link.target = '_blank';
                link.download = this.pdfFileName;

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>