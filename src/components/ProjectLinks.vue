<template>
    <div v-motion-slide-left class="hover:animate-bounce mt-4">
        <a :href="link" class="text-un-blue flex  me-2 items-center font-bold ">
            <font-awesome-icon class="me-2 text-xl" :icon="icon" />
            <span class="min-[320px]:text-[10px] md:text-md ">
                {{title}}
            </span>
            <font-awesome-icon class="ms-2" :icon="['fas', 'arrow-right']" />
        </a>
    </div>
</template>

<script>
    export default {
        name: 'ProjectLinks',
        props:{
            link: {
                type: String,
                required: true
            },
            title: {
                type: String,
                required: true
            }, 
            icon: {
                type: Array,
                required: true
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>