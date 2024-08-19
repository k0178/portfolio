<template>
    <button @click="downloadResume()" class="resume-btn relative  hover:drop-shadow-bittersweet-2 text-chart ">
        <div class="absolute xl:top-3 xl:right-3 min-[320px]:top-3 min-[320px]:right-3 flex items-center gap-3">
            <label for="" class="text-3xl tracking-tighter lg:text-3xl min-[320px]:text-sm"> RESUME</label>
                <font-awesome-icon class="lg:text-3xl min-[320px]:text-sm" :icon="['fas', 'download']" />
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