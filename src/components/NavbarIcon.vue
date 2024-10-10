<template>
    <router-link
        v-motion-slide-right
        :to="to"
        :class="['rounded-s-lg p-3 w-14 flex items-center justify-end hover:border-dashed relative hover:border-2 hover:border-gunmetal hover:text-gunmetal transition duration-300', bgColor]"
    >
        <font-awesome-icon :class="['lg:text-2xl min-[320px]:text-2xl']" :icon="icon" />
    </router-link>
</template>

<script>
    export default {
        name: 'NavbarIcon',
        props: {
        to: {
            type: String,
            required: true
        },
        icon: {
            type: Array,
            required: true
        },
        bgColor: {
            type: String,
            required: true
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>