<template>
    <div>
        <!-- Desktop version -->
        <div
            v-if="!isMobile"
            class="header__desktop-menu"
        >
            <HeaderLogo />
            <HeaderMenu :menu-items="menuItems" />
            <HeaderLanguageSwitcher
                :current-locale="currentLocale"
                @switch-language="switchLanguage"
            />
        </div>

        <!-- Mobile version -->
        <template v-else>
            <button
                class="header__menu-toggle"
                @click="toggleMenu"
                :class="{ 'active': isMenuOpen }"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div
                class="header__menu-container"
                :class="{ 'active': isMenuOpen }"
            >
                <HeaderMenu
                    :menu-items="menuItems"
                    @click="closeMenu"
                />
                <HeaderLanguageSwitcher
                    :current-locale="currentLocale"
                    @switch-language="switchLanguage"
                />
            </div>
        </template>
    </div>
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
import HeaderLanguageSwitcher from './HeaderLanguageSwitcher.vue'
import HeaderLogo from './HeaderLogo.vue'

export default {
    name: 'HeaderNav',
    components: { HeaderMenu, HeaderLanguageSwitcher, HeaderLogo },
    props: {
        isMobile: Boolean,
        isMenuOpen: Boolean,
        menuItems: Array,
        currentLocale: String
    },
    methods: {
        toggleMenu() {
            this.$emit('toggle-menu')
        },
        closeMenu() {
            this.$emit('close-menu')
        },
        switchLanguage(lang) {
            this.$emit('switch-language', lang)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeaderStyles/Header.scss';
</style>
