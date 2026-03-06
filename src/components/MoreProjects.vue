<template>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
        <div>
            <ImageContainer 
                imageSrc='/img/basecamp-thumb.png' 
                imageAlt="Basecamp Thumbnail" 
                isBlurred="true"
                />
        </div>
        <div>
            <ImageContainer 
                imageSrc='/img/multiverse-thumb.png' 
                imageAlt="Multiverse Thumbnail" 
                isBlurred="true"
                />
        </div>
        <div>
            <ImageContainer 
                imageSrc='/img/decatur-thumb.png' 
                imageAlt="Decatur Thumbnail" 
                isBlurred="true"
                />
                
        </div>
    </div>
</template>

<script>

    import ImageContainer from './ImageContainer.vue';
    export default {
        components: {
            ImageContainer
        }
    }
</script>

<style lang="scss" scoped>

</style>