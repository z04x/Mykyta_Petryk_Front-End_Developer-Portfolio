<template >
  <HeaderComponent />
  <HeroSection />
  <WorkExperience />
  <AboutMe />
  <ProjectContainer />
  <Footer />
</template>

<script>
import AboutMe from './components/AboutMeComponent/AboutMe.vue';
import HeaderComponent from './components/HeaderComponent/Header.vue'
import HeroSection from './components/HeroSectionComponent/HeroSection.vue'
import WorkExperience from './components/WorkExperienceComponent/WorkExperience.vue'
import ProjectContainer from './components/ProjectComponent/ProjectsContainer.vue';
import Footer from './components/FooterComponent/Footer.vue';
import { projects } from './constants/project-constants';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    WorkExperience,
    AboutMe,
    ProjectContainer,
    Footer
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
