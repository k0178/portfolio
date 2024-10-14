<template>
    <router-link
        v-motion-slide-right
        :to="to"
        :class="[
            'rounded-s-lg border-gunmetal  border-r-0 border-2 p-3 w-14 hover:w-36 flex items-center justify-between relative text-gunmetal transition-all ease-in-out duration-300 ',
            bgColor
        ]"
        @mouseover="isHovered = true"
        @mouseleave="isHovered = false"
    >
        <font-awesome-icon :class="['lg:text-2xl min-[320px]:text-2xl me-2']" :icon="icon" />
        <label
            v-if="isHovered"
            class="text-sm font-bold"
        >
            {{ title }}
        </label>
    </router-link>
</template>

<script>
    export default {
        name: 'NavbarIcon',
        props: {
            to: {
                type: String,
                required: true,
            },
            icon: {
                type: Array,
                required: true,
            },
            bgColor: {
                type: String,
                required: true,
            },
            title: {
                type: String,
            },
        },
        data() {
            return {
                isHovered: false,
            };
        },
    };
</script>
<style lang="scss" scoped>

</style>