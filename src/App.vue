<template >
  <HeaderComponent />
  <HeroSection />
  <WorkExperience />
  <AboutMe/>
</template>

<script>
import AboutMe from './components/AboutMeComponent/AboutMe.vue';
import HeaderComponent from './components/HeaderComponent/Header.vue'
import HeroSection from './components/HeroSectionComponent/HeroSection.vue'
import WorkExperience from './components/WorkExperienceComponent/WorkExperience.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    WorkExperience,
    AboutMe
  }
}
</script>

<style scoped lang="scss">
</style>
