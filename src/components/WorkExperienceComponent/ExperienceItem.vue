<template>
    <div class="frontend-experience__item">
        <div class="frontend-experience__company-wrapper">
            <div class="frontend-experience__period">{{ experience.period }}</div>
            <div class="frontend-experience__company">{{ experience.company }}</div>
        </div>
        <div class="frontend-experience__details-wrapper">
            <div class="frontend-experience__position">{{ experience.position }}</div>
            <div class="frontend-experience__technologies">{{ experience.technologies }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperienceItem',
    props: {
        experience: {
            type: Object,
            required: true
        }
    }
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/WorkExperienceStyle/ExperienceItem.scss';
</style>
