<template>
    <div class="hero-section__view-projects-button-wrapper">
        <ProjectButton
            type="primary"
            class="hero-section__view-projects-button"
        >
            {{ $t('HeroSection.viewProjects') }}
            <img
                src="@/assets/images/arrow-icon.svg"
                alt="arrow-icon"
                class="hero-section__arrow-icon"
            />
        </ProjectButton>
    </div>
</template>

<script>
import ProjectButton from '@/components/ProjectButton.vue';

export default {
    name: 'HeroViewProjectsButton',
    components: { ProjectButton }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeroSectionStyles/HeroViewProjectsButton.scss';
</style>
