<template>
    <div class="about-me__image-container"></div>
</template>

<script>
export default {
    name: 'AboutMeImage',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/functions';

.about-me {
    &__image-container {
        width: 40%;
        border-radius: rem(36px);
        background: rgba(95, 95, 95, 0.315);
    }

    @media (max-width: $breakpoint-md) {
        &__image-container {
            width: 100%;
            height: 400px;
        }
    }
}
</style>
