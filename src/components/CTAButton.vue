<template>
    <router-link
        v-motion-pop
        :to="to"
        :class="[
            'rounded-lg mb-11 hover:border-chart bg-un-blue text-chart border-2 border-un-blue p-3 font-bold text-xs transition-all ease-in-out duration-300',
        ]"
    >
        
        <label class="text-sm font-bold">
            {{ label }}
        </label>
        <font-awesome-icon :class="['text-sm ms-2']" :icon="icon" />
    </router-link>
</template>

<script>
export default {
    name: 'CTAButton',
    props: {
        label: {
            type: String,
        },
        icon: {
            type: Array,
            required: true
        },
        to: {
            type: String,
            required: true
        }
    },
}
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