<template >
  <HeaderComponent />
  <HeroSection />
  <WorkExperience />
  <AboutMe />
  <ProjectContainer />
</template>

<script>
import AboutMe from './components/AboutMeComponent/AboutMe.vue';
import HeaderComponent from './components/HeaderComponent/Header.vue'
import HeroSection from './components/HeroSectionComponent/HeroSection.vue'
import WorkExperience from './components/WorkExperienceComponent/WorkExperience.vue'
import ProjectContainer from './components/ProjectComponent/ProjectsContainer.vue';
import { projects } from './constants/project-constants';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    WorkExperience,
    AboutMe,
    ProjectContainer
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
