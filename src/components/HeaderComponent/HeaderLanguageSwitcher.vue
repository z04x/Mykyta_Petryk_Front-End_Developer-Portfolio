<template>
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
</template>

<script>
export default {
    name: 'HeaderLanguageSwitcher',
    props: {
        currentLocale: String
    },
    methods: {
        switchLanguage(lang) {
            this.$emit('switch-language', lang)
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeaderStyles/Header.scss';
</style>
