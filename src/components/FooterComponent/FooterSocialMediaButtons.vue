<template>
    <div class="footer__socials-buttons">
        <SocialMediaButton
            v-for="link in socialMediaLinks"
            :key="link.name"
            :link="link"
        />
    </div>
</template>

<script>
import SocialMediaButton from '@/components/SocialMediaButton.vue';

export default {
    name: 'FooterSocialMediaButtons',
    components: { SocialMediaButton },
    props: {
        socialMediaLinks: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" src="@/assets/styles/FooterStyles/FooterSocialMediaButtons.scss" scoped></style>