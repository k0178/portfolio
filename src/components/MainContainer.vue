<template>
    <div :class="['border-gunmetal rounded-r-3xl border-l-0 border-4 h-auto lg:w-3/5 min-[320px]:w-3/4 absolute left-0 z-[-2]  mt-52 p-8 ',boxShadow, bgColor ]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'MainContainer',
        props: {
            bgColor:{
                type: String,
                required: true,
            },
            boxShadow: {
                type: String,
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>