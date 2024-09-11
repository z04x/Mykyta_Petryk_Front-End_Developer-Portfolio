<template>
    <header class="header">
        <Container>
            <nav class="header__nav">
                <div class="header__logo"><span>Mykyta</span> <span>Petryk</span></div>
                <ul class="header__menu">
                    <li><a href="#about">{{ $t('header.about') }}</a></li>
                    <li><a href="#projects">{{ $t('header.projects') }}</a></li>
                    <li><a href="#contacts">{{ $t('header.contacts') }}</a></li>
                </ul>
                <div class="header__language-switcher">
                    <button
                        @click="switchLanguage('de')"
                        :class="{ active: $i18n.locale === 'de' }"
                    >
                        De
                    </button>
                    <button
                        @click="switchLanguage('en')"
                        :class="{ active: $i18n.locale === 'en' }"
                    >
                        En
                    </button>
                </div>
            </nav>
        </Container>
    </header>
</template>

<script>
import Container from './Container.vue'

export default {
    name: 'Header',
    components: {
        Container
    },
    methods: {
        switchLanguage(lang) {
            console.log('Switching language to:', lang);
            this.$i18n.locale = lang;
        }
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
    &__menu {
        display: flex;
        list-style-type: none;
        gap: rem(58px);
        font-size: $font-size-b2;
        font-weight: regular;
    }
    &__language-switcher {
        display: flex;
        flex-direction: column;
        background-color: $color-background;
        gap: rem(8px);
        button {
                background: none;
                border: none;
                cursor: pointer;
                font-family: $font-primary;
                font-size: $font-size-b3;
                color: $color-text-main;
                transition: color 0.3s ease;
                &.active {
                    color: $color-text-primary;
            }
        }
    }
}
</style>