<template>
    <Container>
        <section class="hero-section">
            <HeroContent />
        </section>
    </Container>
</template>

<script>
import Container from '@/components/Container.vue';
import HeroContent from './HeroContent.vue';

export default {
    name: 'HeroSection',
    components: { Container, HeroContent }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeroSectionStyles/HeroSection.scss';
</style>
