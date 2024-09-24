<!-- src/components/ProjectComponent/ProjectContent.vue -->
<template>
    <div class="project__content">
        <h2
            v-if="isDesktop"
            class="project__title"
        >{{ project.title }}</h2>
        <div
            :class="{ 'project__tags--mobile': !isDesktop }"
            class="project__tags"
        >
            <span
                v-for="tag in project.tags"
                :key="tag"
                class="project__tag"
            >{{ tag }}</span>
        </div>
        <div class="project__body">
            <p
                v-for="paragraph in translatedDescription.split('\n')"
                :key="paragraph"
            >{{ paragraph }}</p>
        </div>
        <ProjectButton
            type="block"
            class="project__view-projects-button"
        >
            <img
                src="@/assets/images/social-media-icons-black/GitHub.svg"
                alt="GitHub"
            />
            <img
                src="@/assets/images/arrow-icon.svg"
                alt="arrow-icon"
            />
        </ProjectButton>
    </div>
</template>

<script>
import ProjectButton from '../ProjectButton.vue';

export default {
    name: 'ProjectContent',
    components: {
        ProjectButton
    },
    props: {
        project: {
            type: Object,
            required: true
        },
        isDesktop: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        translatedDescription() {
            if (this.project && this.project.descriptionKey) {
                return this.$t(this.project.descriptionKey);
            }
            return this.project ? this.project.description : '';
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/ProjectStyles/ProjectContent.scss';
</style>