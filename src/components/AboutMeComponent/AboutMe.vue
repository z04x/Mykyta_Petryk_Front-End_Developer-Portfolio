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
            frontEndSkills: '',
            stylesSkills: '',
            dataSkills: ''
        };
    },
    created() {
        this.updateSkills();
    },
    watch: {
        '$i18n.locale': 'updateSkills'
    },
    methods: {
        updateSkills() {
            this.frontEndSkills = this.$t('aboutMe.frontEndSkills');
            this.stylesSkills = this.$t('aboutMe.stylesSkills');
            this.dataSkills = this.$t('aboutMe.dataSkills');
        }
    }
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/AboutMeStyles/AboutMe.scss';
</style>
