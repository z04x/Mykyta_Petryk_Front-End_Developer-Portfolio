<template>
    <section class="footer__named">
        <h1 class="footer__named-name">&lt;Mykyta</h1>
        <div>
            <p class="footer__named-role">Frontend <br> {{ $t('Footer.etw') }}</p>
            <h1 class="footer__named-name">Petryk&gt;</h1>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FooterNamedSection',
};
</script>

<style lang="scss" src="@/assets/styles/FooterStyles/FooterNamedSection.scss" scoped></style>