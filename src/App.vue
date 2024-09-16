<template >
  <HeaderComponent />
  <HeroSection />
  <WorkExperience />
</template>

<script>
import HeaderComponent from './components/HeaderComponent/Header.vue'
import HeroSection from './components/HeroSectionComponent/HeroSection.vue'
import WorkExperience from './components/WorkExperienceComponent/WorkExperience.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    HeroSection,
    WorkExperience
  }
}
</script>

<style scoped lang="scss">
</style>
