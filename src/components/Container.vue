<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'Container'
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/functions';

.container {
    max-width: $container-max-width;
    margin: 0 auto;
    padding: 0 rem(15px);
}
</style>