<template>
    <button
        :class="['custom-button', `custom-button--${type}`, { 'custom-button--block': block }]"
        @click="$emit('click')"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'primary',
            validator: (value) => ['primary', 'secondary'].includes(value)
        },
        block: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/functions';

.custom-button {
    padding: rem(16) rem(0);
    border: none;
    border-radius: rem(48);
    font-family: $font-primary;
    font-size: $font-size-b3;
    font-style: italic;
    cursor: pointer;
    transition: all 0.3s ease;

    &--primary {
        background-color: $color-btnBg-primary;
        max-height: 56px;
        color: $color-text-btn;
        opacity: 1;
        &:hover {
            opacity: 0.88;
        }
    }

    &--secondary {
        background-color: transparent;
        color: $color-text-primary;
        border: 1px solid $color-text-primary;
        &:hover {
            color: $color-text-main;
        }
    }

    &--block {
        background-color: $color-btnBg-primary;
            color: $color-text-btn;
            opacity: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            width: fit-content;
            gap:8px;
            padding: 16px 24px;
            &:hover {
                    opacity: 0.88;
                }
    }
}
</style>