<template>
    <button
        v-motion-slide-right
        v-if="isVisible"
        @click="scrollToTop"
        class="fixed text-xs bottom-4 right-0 rounded-l-lg bg-gunmetal hover:drop-shadow-bittersweet-2 text-chart   p-5 transition duration-300"
        >
        <font-awesome-icon class="text-xl" :icon="['fas', 'square-caret-up']" />
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