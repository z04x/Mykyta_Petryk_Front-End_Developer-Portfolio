<template>
    <div class="hero-section__content">
        <HeroTitle />
        <HeroDescription />
        <HeroViewProjectsButton />
        <HeroSocialMediaLinks />
    </div>
</template>

<script>
import HeroTitle from './HeroTitle.vue';
import HeroDescription from './HeroDescription.vue';
import HeroViewProjectsButton from './HeroViewProjectsButton.vue';
import HeroSocialMediaLinks from './HeroSocialMediaLinks.vue';

export default {
    name: 'HeroContent',
    components: {
        HeroTitle,
        HeroDescription,
        HeroViewProjectsButton,
        HeroSocialMediaLinks
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeroSectionStyles/HeroContent.scss';
</style>
