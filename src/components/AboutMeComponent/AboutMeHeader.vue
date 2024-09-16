<template>
    <div class="about-me__header">
        <h2 class="about-me__title">&lt;About me&gt;</h2>
        <p class="about-me__description">
            Lorem ipsum dolor sit amet consectetur. Rhoncus fermentum turpis ullamcorper tortor.
        </p>
    </div>
</template>

<script>
export default {
    name: 'AboutMeHeader',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/functions';

.about-me {
    &__header {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: rem(10px);
        @include adaptiveValue("padding-bottom", 46, 0);
    }

    &__title {
        font-size: $font-size-h2;
        color: $color-text-primary;
        font-weight: bold;
        line-height: 1.5;
        flex: 1 0 auto;
    }

    &__description {
        font-size: $font-size-b3;
        font-style: italic;
        line-height: 1.5;
        color: $color-text-main;
        width: 100%;
        text-align: center;

        @media (max-width: $breakpoint-md) {
            display: none;
        }
    }


}
</style>
