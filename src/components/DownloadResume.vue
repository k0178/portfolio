<template>
    <button @click="downloadResume()" class="resume-btn p-5 drop-shadow-bittersweet-2 text-chart flex  items-center gap-3">
        <div class="flex absolute top-3 right-3 items-center gap-3">
            <label for="" class="text-3xl tracking-tighter"> RESUME</label>
            <font-awesome-icon class="text-2xl " :icon="['fas', 'download']" />
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