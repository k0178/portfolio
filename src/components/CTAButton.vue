<template>
    <component
        v-motion-pop
        :is="isExternal ? 'a' : 'router-link'"
        :href="isExternal ? to : null"
        :to="!isExternal ? to : null"
        :target="isExternal ? '_blank' : null"
        :rel="isExternal ? 'noopener' : null"
        :class="[
            'rounded-lg p-3 font-medium text-xs transition-all ease-in-out duration-300',
        ]"
    >
        
        <label class="text-sm font-bold">
            {{ label }}
        </label>
        <font-awesome-icon :class="['text-sm ms-2']" :icon="icon" />
    </component>
</template>

<script>
export default {
    props: {
        to: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        icon: {
            type: [String, Array],
            required: true,
        },
    },

    computed: {
        isExternal() {
        return this.to && this.to.startsWith("http");
        },
    },
};
</script>

<style scoped>
.cta-button {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    color: white;
    background-color: #29E7CD;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.cta-button:hover:not(:disabled) {
    background-color: #0052a3;
}

.cta-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}
</style>