<template>
    <button @click="downloadResume()" class="resume-btn relative flex items-center justify-end hover:drop-shadow-bittersweet-2 text-chart transition duration-300">
        <div class="flex items-center gap-3 me-3">
            <label for="" class="lg:text-3xl min-[320px]:text-sm tracking-tighter lg:visible min-[320px]:invisible"> DOWNLOAD MY RESUME</label>
            <font-awesome-icon class="lg:text-2xl min-[320px]:text-2xl" :icon="['fas', 'file-arrow-down']" />
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