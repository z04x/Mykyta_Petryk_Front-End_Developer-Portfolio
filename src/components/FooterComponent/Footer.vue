<template>
    <footer class="footer">
        <Container>
            <div :class="['footer__container', { 'footer__container--mobile': isMobile }]">
                <div class="footer__content">
                    <!-- Named section -->
                    <FooterNamedSection v-if="!isMobile" />

                    <!-- Info section -->
                    <FooterInfoSection :navLinks="navLinks" />
                </div>

                <!-- Social media buttons -->
                <FooterSocialMediaButtons :socialMediaLinks="socialMediaLinks" />

                <!-- Mobile named section -->
                <FooterNamedSection v-if="isMobile" />
            </div>
        </Container>
    </footer>
</template>

<script>
import { computed } from 'vue';
import Container from '@/components/Container.vue';
import FooterNamedSection from '@/components/FooterComponent/FooterNamedSection.vue';
import FooterInfoSection from '@/components/FooterComponent/FooterInfoSection.vue';
import FooterSocialMediaButtons from '@/components/FooterComponent/FooterSocialMediaButtons.vue';
import { SOCIAL_MEDIA_LINKS } from '@/constants/social-media-constants';
import { useWindowSize } from '@/composables/useWindowSize';

export default {
    name: 'Footer',
    components: { Container, FooterNamedSection, FooterInfoSection, FooterSocialMediaButtons },
    setup() {
        const { width } = useWindowSize();

        // Computed property for mobile view
        const isMobile = computed(() => width.value <= 768);

        // Navigation links
        const navLinks = [
            { href: '#about', text: 'Footer.about' },
            { href: '#projects', text: 'Footer.projects' },
            { href: '#contacts', text: 'Footer.contacts' },
        ];

        return {
            isMobile,
            socialMediaLinks: SOCIAL_MEDIA_LINKS,
            navLinks,
        };
    },
};
</script>

<style lang="scss" src="@/assets/styles/FooterStyles/Footer.scss" scoped></style>