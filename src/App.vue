<template >
  <HeaderComponent />
  <HeroSection />
  <WorkExperience />
  <AboutMe />
  <Project :id="1" />
  <Project :id="2" />
</template>

<script>
import AboutMe from './components/AboutMeComponent/AboutMe.vue';
import HeaderComponent from './components/HeaderComponent/Header.vue'
import HeroSection from './components/HeroSectionComponent/HeroSection.vue'
import WorkExperience from './components/WorkExperienceComponent/WorkExperience.vue'
import Project from './components/ProjectComponent/Project.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    WorkExperience,
    AboutMe,
    Project
  }
}
</script>

<style scoped lang="scss">
</style>
