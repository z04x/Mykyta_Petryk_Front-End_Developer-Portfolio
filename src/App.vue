<template >
  <HeaderComponent />
  <HeroSection />
  <WorkExperience />
  <AboutMe />
  <Project
    v-for="project in projects"
    :key="project.id"
    :id="project.id"
  />
</template>

<script>
import AboutMe from './components/AboutMeComponent/AboutMe.vue';
import HeaderComponent from './components/HeaderComponent/Header.vue'
import HeroSection from './components/HeroSectionComponent/HeroSection.vue'
import WorkExperience from './components/WorkExperienceComponent/WorkExperience.vue'
import Project from './components/ProjectComponent/Project.vue';
import { projects } from './constants/project-constants';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    WorkExperience,
    AboutMe,
    Project
  },
  data() {
    return {
      projects
    };
  }
}
</script>

<style scoped lang="scss">
</style>
