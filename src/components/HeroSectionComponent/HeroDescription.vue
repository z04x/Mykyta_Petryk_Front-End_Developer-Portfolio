<template>
    <div class="hero-section__description-wrapper">
        <p
            class="hero-section__description"
            v-html="formattedDescription"
        ></p>
    </div>
</template>

<script>
export default {
    name: 'HeroDescription',
    computed: {
        formattedDescription() {
            const description = this.$t('HeroSection.description');
            const keywords = /(developer|Entwickler|React|Vue|TypeScript|fast|schnell|user-friendly|benutzerfreundlich|wow-factor|"Wow-Faktors")/gi;
            return description.replace(keywords, '<span class="hero-section__description-part">$1</span>');
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeroSectionStyles/HeroDescription.scss';
</style>
