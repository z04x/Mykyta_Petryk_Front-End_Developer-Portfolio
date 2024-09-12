<template>
    <a
        :href="link.url"
        target="_blank"
        rel="noopener noreferrer"
        class="social-media-button"
    >
        <img :src="link.icon" :alt="link.name" class="icon" />
        {{ link.name }}
    </a>
</template>

<script>
export default {
    name: 'SocialMediaButton',
    props: {
        link: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
.social-media-button {
    display: flex;
    color: #f5f5f5;
    justify-content: center;
    align-items: center;
    padding: 16px 0;
    width: 161px;
    border: 1px solid #ffffff;
    border-radius: 48px;
    transition: color 0.3s;

    &:hover {
        color: #a6a6a6;
    }

    .icon {
        margin-right: 8px;
    }
}
</style>