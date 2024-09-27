<template>
    <section class="footer__info">
        <h2 class="footer__info-title">{{ $t('Footer.moreInfo') }}</h2>
        <nav class="footer__nav">
            <a
                v-for="link in navLinks"
                :key="link.href"
                :href="link.href"
                class="footer__link"
            >
                {{ $t(link.text) }}
            </a>
        </nav>
        <address class="footer__contacts">
            <p class="footer__contact-title">{{ $t('Footer.landingCreators') }}</p>
            <div class="footer__contact-info">
                <div class="footer__contact-creators">
                    <p>{{ $t('Footer.frontendReferences') }} Mykyta Petryk</p>
                    <p>{{ $t('Footer.uxUiDesign') }} Diana Ata</p>
                </div>
                <div class="footer__contact-phone">
                    <a href="tel:+491718303172">+49 171 8303 172</a>
                    <p>{{ $t('Footer.location') }}</p>
                </div>
            </div>
        </address>
    </section>
</template>

<script>
export default {
    name: 'FooterInfoSection',
    props: {
        navLinks: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" src="@/assets/styles/FooterStyles/FooterInfoSection.scss" scoped></style>