<template>
    <header class="header">
        <Container>
            <!-- Navigation: desktop and mobile versions -->
            <HeaderNav
                :is-mobile="isMobile"
                :is-menu-open="isMenuOpen"
                :menu-items="menuItems"
                :current-locale="currentLocale"
                @toggle-menu="toggleMenu"
                @close-menu="closeMenu"
                @switch-language="switchLanguage"
            />
        </Container>
    </header>
</template>

<script>
import Container from '@/components/Container.vue'
import HeaderNav from '@/components/HeaderComponent/HeaderNav.vue'

export default {
    name: 'Header',
    components: { Container, HeaderNav },
    data() {
        return {
            isMenuOpen: false,
            isMobile: false,
            menuItems: ['about', 'projects', 'contacts']
        }
    },
    computed: {
        currentLocale() {
            return this.$i18n.locale
        }
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        },
        closeMenu() {
            this.isMenuOpen = false
        },
        switchLanguage(lang) {
            this.$i18n.locale = lang
        }
    },
    mounted() {
        this.checkMobile()
        window.addEventListener('resize', this.checkMobile)
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile)
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeaderStyles/Header.scss';
</style>
