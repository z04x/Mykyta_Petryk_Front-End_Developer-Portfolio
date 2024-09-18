<template>
    <div class="about-me__section-container">
        <div class="about-me__section-content">
            <h3>Front-end</h3>
            <p v-html="frontEndSkills"></p>
        </div>
        <div class="about-me__section-content">
            <h3>Style</h3>
            <p v-html="stylesSkills"></p>
        </div>
        <div class="about-me__section-content">
            <h3>Data</h3>
            <p v-html="dataSkills"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMeSection',
    props: {
        frontEndSkills: String,
        stylesSkills: String,
        dataSkills: String,
    },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/AboutMeStyles/AboutMeSection.scss';
</style>
