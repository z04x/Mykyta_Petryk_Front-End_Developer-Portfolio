<template>
    <div class="about-me__header">
        <h2 class="about-me__title">&lt;{{ $t('aboutMe.title') }}&gt;</h2>
        <p class="about-me__description">
            {{ $t('aboutMe.description') }}
        </p>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
export default {
    name: 'AboutMeHeader',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/AboutMeStyles/AboutMeHeader.scss';
</style>
