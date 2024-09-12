<template>
    <header class="header">
        <Container>
            <nav class="header__nav">
                <!-- Desktop version of the header menu -->
                <div
                    v-if="!isMobile"
                    class="header__desktop-menu"
                >
                    <div class="header__logo">
                        <span
                            v-for="(word, index) in ['Mykyta', 'Petryk']"
                            :key="index"
                        >{{ word }}</span>
                    </div>
                    <ul class="header__menu">
                        <li
                            v-for="item in menuItems"
                            :key="item"
                        >
                            <a :href="`#${item}`">{{ $t(`header.${item}`) }}</a>
                        </li>
                    </ul>
                    <div class="header__language-switcher">
                        <button
                            v-for="lang in ['de', 'en']"
                            :key="lang"
                            @click="switchLanguage(lang)"
                            :class="{ active: currentLocale === lang }"
                        >
                            {{ lang.toUpperCase() }}
                        </button>
                    </div>
                </div>

                <!-- Mobile version of the header menu -->
                <template v-else>
                    <div class="header__logo">
                        <span
                            v-for="(word, index) in ['Mykyta', 'Petryk']"
                            :key="index"
                        >{{ word }}</span>
                    </div>
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
                        <ul class="header__menu">
                            <li
                                v-for="item in menuItems"
                                :key="item"
                            >
                                <a
                                    :href="`#${item}`"
                                    @click="closeMenu"
                                >{{ $t(`header.${item}`) }}</a>
                            </li>
                        </ul>
                        <div class="header__language-switcher">
                            <button
                                v-for="lang in ['de', 'en']"
                                :key="lang"
                                @click="switchLanguage(lang)"
                                :class="{ active: currentLocale === lang }"
                            >
                                {{ lang.toUpperCase() }}
                            </button>
                        </div>
                    </div>
                </template>
            </nav>
        </Container>
    </header>
</template>

<script>
import Container from './Container.vue'

export default {
    name: 'Header',
    components: { Container },
    data() {
        return {
            isMenuOpen: false, // Toggle state for mobile menu
            isMobile: false,   // State to check if the viewport is mobile
            menuItems: ['about', 'projects', 'contacts'] // Menu items
        }
    },
    computed: {
        currentLocale() {
            return this.$i18n.locale // Current language locale
        }
    },
    methods: {
        checkMobile() {
            this.isMobile = window.innerWidth <= 768 // Determine if the viewport is mobile
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen // Toggle the mobile menu open/closed
        },
        switchLanguage(lang) {
            console.log('Switching language to:', lang) // Log language switch
            this.$i18n.locale = lang // Switch the language locale
        },
        closeMenu() {
            this.isMenuOpen = false // Close the mobile menu
        }
    },
    mounted() {
        this.checkMobile() // Initial check for mobile view
        window.addEventListener('resize', this.checkMobile) // Add event listener for window resize
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.checkMobile) // Clean up event listener
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/functions';
@import '@/assets/styles/variables';

.header {
    padding: 1rem 0;

    &__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid $color-border-primary;
        @include adaptiveValue("padding-bottom", 24, 0);

        @media (max-width: $breakpoint-md) {
            border-bottom: none; // Remove border for mobile view
        }
    }

    &__logo {
        display: flex;
        flex-direction: column;
        font-size: $font-size-b2;
        font-weight: regular;
        font-family: $font-secondary;
        color: $color-text-secondary;
        gap: rem(5px);
    }

    &__menu-toggle {
        display: none;
        flex-direction: column;
        justify-content: space-between;
        width: 30px;
        height: 21px;
        cursor: pointer;
        background: none;
        border: none;
        padding: 0;

        @media (max-width: $breakpoint-md) {
            display: flex; // Show menu toggle button on mobile
        }

        span {
            display: block;
            width: 100%;
            height: 3px;
            background-color: $color-text-primary;
            transition: all 0.3s ease;
        }

        &.active {
            span:nth-child(1) {
                transform: rotate(45deg) translate(5.8px, 5px);
            }

            span:nth-child(2) {
                opacity: 0; // Hide middle span when active
            }

            span:nth-child(3) {
                transform: rotate(-45deg) translate(7px, -7px);
            }
        }
    }

    &__menu-container {
        display: flex;
        align-items: center;

        @media (max-width: $breakpoint-md) {
            position: fixed;
            top: 70px;
            left: 0;
            right: 0;
            bottom: 0;
            flex-direction: column;
            background-color: $color-background;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            z-index: 1000;

            &.active {
                transform: translateX(0); // Slide in menu when active
            }
        }
    }

    &__menu {
        display: flex;
        list-style-type: none;
        gap: rem(58px);
        font-size: $font-size-b2;
        font-weight: regular;

        @media (max-width: $breakpoint-md) {
            flex-direction: column;
            align-items: center;
            margin-top: rem(40);
        }
    }

    &__language-switcher {
        display: flex;
        flex-direction: column;
        background-color: $color-background;
        gap: rem(8px);
        margin-left: rem(58px);

        @media (max-width: $breakpoint-md) {
            margin-top: rem(40);
            margin-left: 0;
            flex-direction: row;
        }

        button {
            background: none;
            border: none;
            cursor: pointer;
            font-family: $font-primary;
            font-size: $font-size-b3;
            color: $color-text-main;
            transition: color 0.3s ease;

            &.active {
                color: $color-text-primary; // Highlight active language button
            }
        }
    }

    &__desktop-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
}
</style>
