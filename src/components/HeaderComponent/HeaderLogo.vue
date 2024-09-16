<template>
    <div class="header__logo">
        <span
            v-for="(word, index) in ['Mykyta', 'Petryk']"
            :key="index"
        >{{ word }}</span>
    </div>
</template>

<script>
export default {
    name: 'HeaderLogo'
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeaderStyles/Header.scss';
</style>
