<template>
    <div class="image-container">
        <img 
            :src="imageSrc" 
            :alt="imageAlt"
            class="container-image"
        />
        <div v-if="caption" class="image-caption">
            {{ caption }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageContainer',
    props: {
        imageSrc: {
            type: String,
            required: true
        },
        imageAlt: {
            type: String,
            default: 'Image'
        },
        caption: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.container-image {
    width: 100%;
    max-width: 100%;
    height: 50%;
    border-radius: 10px;
    object-fit: cover;
}

.image-caption {
    font-size: 0.875rem;
    color: #666;
    text-align: center;
    margin-top: 0.25rem;
}
</style>