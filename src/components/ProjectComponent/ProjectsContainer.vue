<!-- src/components/ProjectComponent/ProjectsContainer.vue -->
<template>
    <Container>
        <ProjectHeader />
        <div class="projects-container">
            <Project
                v-for="project in projects"
                :key="project.id"
                :project="project"
            />
        </div>
    </Container>
</template>

<script>
import { projects } from '@/constants/project-constants';
import Container from '@/components/Container.vue';
import ProjectHeader from './ProjectHeader.vue';
import Project from './Project.vue';

export default {
    name: 'ProjectsContainer',
    components: {
        Container,
        ProjectHeader,
        Project
    },
    data() {
        return {
            projects
        };
    }
};
</script>