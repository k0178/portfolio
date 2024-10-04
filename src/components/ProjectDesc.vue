<template>
    <div class="mt-4">
        <p v-motion-slide-left class=" sm:break-words text-isabelline lg:text-base min-[320px]:text-sm mb-10 ">
            {{text}}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'ProjectDesc',
        props: {
            text: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>