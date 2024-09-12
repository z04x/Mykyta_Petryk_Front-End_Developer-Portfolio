<template>
    <Container>
        <section class="hero-section">
            <!-- Main content section -->
            <div class="hero-section__content">
                <!-- Section title -->
                <div class="hero-section__title-wrapper">
                    <h1 class="hero-section__title">
                        <span class="hero-section__title-part">&lt;Front-end</span>
                    </h1>
                    <h1 class="hero-section__title">
                        <span class="hero-section__title-part">{{ $t('HeroSection.title') }}&gt;</span>
                    </h1>
                </div>
                <!-- Section description -->
                <div class="hero-section__description-wrapper">
                    <p
                        class="hero-section__description"
                        v-html="formattedDescription"
                    ></p>
                </div>
                <!-- View projects button -->
                <div class="hero-section__view-projects-button-wrapper">
                    <ProjectButton
                        type="primary"
                        class="hero-section__view-projects-button"
                    >
                        {{ $t('HeroSection.viewProjects') }}
                        <img
                            src="@/assets/images/arrow-icon.svg"
                            alt="arrow-icon"
                            class="hero-section__arrow-icon"
                        />
                    </ProjectButton>
                </div>
                <!-- Social media links -->
                <div class="hero-section__social-media-links">
                    <SocialMediaButton
                        v-for="link in socialMediaLinks"
                        :key="link.name"
                        :link="link"
                    />
                </div>
            </div>
        </section>
    </Container>
</template>

<script>
import SocialMediaButton from './SocialMediaButton.vue';
import { SOCIAL_MEDIA_LINKS } from '../constants/social-media-constants';
import Container from './Container.vue';
import ProjectButton from './ProjectButton.vue';

export default {
    name: 'HeroSection',
    components: {
        ProjectButton,
        SocialMediaButton,
        Container
    },
    data() {
        return {
            socialMediaLinks: SOCIAL_MEDIA_LINKS
        };
    },
    computed: {
        // Format description with highlighted keywords
        formattedDescription() {
            const description = this.$t('HeroSection.description');
            const keywords = /(developer|Entwickler|React|Vue|TypeScript|fast|schnell|user-friendly|benutzerfreundlich|wow-factor|"Wow-Faktors")/gi;
            return description.replace(keywords, '<span class="hero-section__description-part">$1</span>');
        }
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/functions';
@import '@/assets/styles/variables';

.hero-section {
    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    &__title-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    &__title {
        @include adaptiveValue("font-size", 112, 40);
        font-family: $font-secondary;
        font-weight: $font-weight-bold;
        color: $color-text-primary;
        @include adaptiveValue("line-height", 166, 60);

        &:first-child {
            @include adaptiveValue("padding-top", 48, 80);
            align-self: flex-start;
        }

        &:last-child {
            align-self: flex-end;
        }
    }

    &__description-wrapper {
        align-self: flex-start;

        p {
            max-width: rem(610px);
        }
    }

    &__description {
        color: $color-text-main;
        font-size: 16px;
        line-height: 18px;

        :deep(.hero-section__description-part) {
            color: $color-text-primary;
        }
    }

    &__social-media-links {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        margin-top: rem(48px);
        @include adaptiveValue("gap", 40, 8);

        @media (max-width: $breakpoint-md) {
            grid-template-columns: 1fr 1fr;
        }
    }

    &__view-projects-button-wrapper {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding-top: rem(31px);

        @media (max-width: $breakpoint-md) {
            justify-content: center;
        }
    }

    &__view-projects-button {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: rem(271px);
        width: 100%;
        gap: rem(30px);
    }
}
</style>
