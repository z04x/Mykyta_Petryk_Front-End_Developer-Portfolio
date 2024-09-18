<template>
    <ProjectButton
        type="block"
        class="about-me__view-projects-button"
    >
        <img
            src="@/assets/images/social-media-icons-black/GitHub.svg"
            alt="GitHub"
        />
        {{ $t('HeroSection.viewProjects') }}
        <img
            src="@/assets/images/arrow-icon.svg"
            alt="arrow-icon"
        />
    </ProjectButton>
</template>

<script>
import ProjectButton from '@/components/ProjectButton.vue';

export default {
    name: 'AboutMeButton',
    components: {
        ProjectButton
    },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/AboutMeStyles/AboutMeButton.scss';
</style>
