<template>
    <ul class="header__menu">
        <li
            v-for="item in menuItems"
            :key="item"
        >
            <a
                :href="`#${item}`"
                @click="$emit('click')"
            >{{ $t(`header.${item}`) }}</a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'HeaderMenu',
    props: {
        menuItems: Array
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeaderStyles/Header.scss';
</style>
