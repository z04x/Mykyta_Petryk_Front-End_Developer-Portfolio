<!-- src/components/ProjectComponent/Project.vue -->
<template>
    <div
        class="project"
        v-if="project"
    >
        <ProjectContent
            :project="project"
            :isDesktop="isDesktop"
        />
        <ProjectImages
            v-if="isDesktop"
            :images="project.images"
        />
        <ProjectCarousel
            v-else
            :images="project.images"
            :swiperOptions="swiperOptions"
            :projectTitle="project.title"
        />
    </div>
    <div v-else>
        <p>Project not found</p>
    </div>
</template>

<script>
import ProjectContent from './ProjectContent.vue';
import ProjectImages from './ProjectImages.vue';
import ProjectCarousel from './ProjectCarousel.vue';

export default {
    name: 'Project',
    components: {
        ProjectContent,
        ProjectImages,
        ProjectCarousel
    },
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isDesktop: window.innerWidth >= 768,
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.isDesktop = window.innerWidth >= 768;
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/ProjectStyles/Project.scss';
</style>