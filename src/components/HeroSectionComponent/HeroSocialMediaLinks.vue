<template>
    <div class="hero-section__social-media-links">
        <SocialMediaButton
            v-for="link in socialMediaLinks"
            :key="link.name"
            :link="link"
        />
    </div>
</template>

<script>
import SocialMediaButton from '@/components/SocialMediaButton.vue';
import { SOCIAL_MEDIA_LINKS } from '@/constants/social-media-constants';

export default {
    name: 'HeroSocialMediaLinks',
    components: { SocialMediaButton },
    data() {
        return {
            socialMediaLinks: SOCIAL_MEDIA_LINKS
        };
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/HeroSectionStyles/HeroSocialMediaLinks.scss';
</style>
