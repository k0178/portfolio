<template>
    <button
        v-if="isVisible"
        @click="scrollToTop"
        class="fixed text-xs bottom-4 right-4 resume-btn hover:drop-shadow-bittersweet-2 text-chart   p-5 transition duration-300"
        >
        Back to Top ↑
    </button>
</template>

<script>
    export default {
        data() {
            return {
                isVisible: false,
            };
        },
            mounted() {
            window.addEventListener("scroll", this.toggleVisibility);
        },
        beforeDestroy() {
            window.removeEventListener("scroll", this.toggleVisibility);
        },
        methods: {
            toggleVisibility() {
                this.isVisible = window.scrollY > 300;
            },
            scrollToTop() {
                window.scrollTo({
                top: 0,
                behavior: "smooth",
                });
            },
        },
    };
</script>