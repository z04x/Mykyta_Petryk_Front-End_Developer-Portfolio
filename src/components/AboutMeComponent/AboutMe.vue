<template>
    <Container>
        <section class="about-me">
            <!-- Header Section -->
            <AboutMeHeader />

            <!-- Content Section -->
            <div class="about-me__content">
                <!-- Sections Container -->
                <AboutMeSection
                    :front-end-skills="frontEndSkills"
                    :styles-skills="stylesSkills"
                    :data-skills="dataSkills"
                />

                <!-- Image Container -->
                <AboutMeImage />
            </div>

            <!-- Project Button -->
            <AboutMeButton />
        </section>
    </Container>
</template>

<script>
import Container from '../Container.vue';
import AboutMeHeader from './AboutMeHeader.vue';
import AboutMeSection from './AboutMeSection.vue';
import AboutMeImage from './AboutMeImage.vue';
import AboutMeButton from './AboutMeButton.vue';

export default {
    name: 'AboutMe',
    components: {
        Container,
        AboutMeHeader,
        AboutMeSection,
        AboutMeImage,
        AboutMeButton
    },
    data() {
        return {
            frontEndSkills: `
        <span class="highlight">Frontend-Entwicklung:</span> React, Vue, TypeScript, JavaScript (ES6+)
        <br>
        <span class="highlight">Entwicklungstools:</span> Gulp, Webpack, Git, Jira, GitHub
      `,
            stylesSkills: `
        <span class="highlight">UI/UX:</span> Material-UI, responsives Design (CSS3, SCSS, Flexbox, Grid), Animationen
        <br>
        <span class="highlight">Leistungsoptimierung:</span> Lazy Loading, Code Splitting, Ladezeitoptimierung
        <br>
        <span class="highlight">Build & Automatisierung:</span> Gulp, Webpack, CI/CD-Pipelines
      `,
            dataSkills: `
        <span class="highlight">API und Integrationen:</span> REST API, WebSocket, SDKs (Telegram, Jira, GitHub)
        <br>
        <span class="highlight">Grundkenntnisse in Python:</span> Einfache Automatisierungen und Skripterstellung
      `,
        };
    },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/functions';

.about-me {
    @include adaptiveValue("padding-top", 192, 80);

    &__content {
        display: flex;
    }

    @media (max-width: $breakpoint-md) {
        &__content {
            flex-direction: column-reverse;
            align-items: center;
            width: 100%;
        }
    }
}
</style>
