<template>
    <Container>
        <div class="frontend-experience">
            <div class="frontend-experience__header">
                <h2 class="frontend-experience__title">{{ $t('WorkExperience.title') }}</h2>
                <span class="frontend-experience__total">{{ totalExperience }}</span>
            </div>
            <div class="frontend-experience__list">
                <ExperienceItem
                    v-for="(exp) in frontendExperience"
                    :key="exp.id"
                    :experience="exp"
                />
            </div>
        </div>
    </Container>
</template>

<script>
import { FRONTEND_EXPERIENCE, TOTAL_EXPERIENCE } from '@/constants/work-experience-constant';
import Container from '@/components/Container.vue';
import ExperienceItem from '@/components/WorkExperienceComponent/ExperienceItem.vue';

export default {
    name: 'WorkExperience',
    components: {
        Container,
        ExperienceItem
    },
    data() {
        return {
            frontendExperience: FRONTEND_EXPERIENCE,
            totalExperience: TOTAL_EXPERIENCE
        };
    }
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/WorkExperienceStyle/WorkExperience.scss';
</style>
