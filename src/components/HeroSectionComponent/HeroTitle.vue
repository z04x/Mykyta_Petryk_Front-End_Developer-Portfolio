<template>
    <div class="hero-section__title-wrapper">
        <h1 class="hero-section__title">
            <span class="hero-section__title-part">&lt;Front-end</span>
        </h1>
        <h1 class="hero-section__title">
            <span class="hero-section__title-part">{{ $t('HeroSection.title') }}&gt;</span>
        </h1>
    </div>
</template>

<script>
export default {
    name: 'HeroTitle'
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeroSectionStyles/HeroTitle.scss';
</style>
