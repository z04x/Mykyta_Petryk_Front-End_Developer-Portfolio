<!-- src/components/ProjectComponent/ProjectHeader.vue -->
<template>
    <div class="project-header">
        <h2 class="project-header__title">&lt;{{ $t('projects.title') }}&gt;</h2>
    </div>
</template>

<script>

export default {
    name: 'ProjectHeader',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/ProjectStyles/ProjectHeader.scss';
</style>
