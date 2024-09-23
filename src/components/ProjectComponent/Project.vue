<template>
    <Container>
        <div class="project" v-if="project">
            <div class="project__content">
                <h2 class="project__title">{{ project.title }}</h2>
                <div class="project__tags">
                    <span
                        v-for="tag in project.tags"
                        :key="tag"
                        class="project__tag"
                    >{{ tag }}</span>
                </div>
                <div class="project__body">
                    <p
                        v-for="paragraph in translatedDescription.split('\n')"
                        :key="paragraph"
                    >{{ paragraph }}</p>
                </div>
                <ProjectButton
                    type="block"
                    class="project__view-projects-button"
                >
                    <img
                        src="@/assets/images/social-media-icons-black/GitHub.svg"
                        alt="GitHub"
                    />
                    <img
                        src="@/assets/images/arrow-icon.svg"
                        alt="arrow-icon"
                    />
                </ProjectButton>
            </div>
            <div class="project__images parent" v-if="isDesktop">
                <div
                    class="image-placeholder"
                    ref="image1"
                ></div>
                <div
                    class="image-placeholder"
                    ref="image2"
                ></div>
                <div
                    class="image-placeholder"
                    ref="image3"
                ></div>
            </div>
            <div class="project__carousel" v-else>
                <swiper :options="swiperOptions">
                    <swiper-slide v-for="(image, index) in images" :key="index">
                        <div class="image-placeholder"></div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div v-else>
            <p>Project not found</p>
        </div>
    </Container>
</template>

<script>
import { projects } from '@/constants/project-constants';
import Container from '@/components/Container.vue';
import ProjectButton from '../ProjectButton.vue';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import { useI18n } from 'vue-i18n';

export default {
    name: 'Project',
    components: {
        Container,
        ProjectButton,
        Swiper,
        SwiperSlide
    },
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            project: projects.find((proj) => proj.id === this.id),
            isDesktop: window.innerWidth >= 768,
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            images: [1, 2, 3] // Массив для изображений
        };
    },
    computed: {
        translatedDescription() {
            if (this.project && this.project.descriptionKey) {
                return this.$t(this.project.descriptionKey);
            }
            return this.project.description || '';
        }
    },
    mounted() {
        this.randomizeImagePositions();
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.isDesktop = window.innerWidth >= 768;
        },
        randomizeImagePositions() {
            if (!this.isDesktop) return;

            const images = [this.$refs.image1, this.$refs.image2, this.$refs.image3];

            // Возможные комбинации позиций и размеров ячеек
            const combinations = [
                [
                    { gridArea: '1 / 1 / 2 / 3' },
                    { gridArea: '2 / 1 / 3 / 2' },
                    { gridArea: '2 / 2 / 3 / 3' }
                ],
                [
                    { gridArea: '2 / 1 / 3 / 2' },
                    { gridArea: '1 / 1 / 2 / 2' },
                    { gridArea: '1 / 2 / 3 / 3' }
                ],
                [
                    { gridArea: '2 / 1 / 3 / 3' },
                    { gridArea: '1 / 1 / 2 / 2' },
                    { gridArea: '1 / 2 / 2 / 3' }
                ],
                [
                    { gridArea: '1 / 1 / 2 / 2' },
                    { gridArea: '2 / 1 / 3 / 2' },
                    { gridArea: '1 / 2 / 3 / 3' }
                ]
            ];

            // Выбор случайной комбинации
            const randomCombination = combinations[Math.floor(Math.random() * combinations.length)];

            // Применение позиций к изображениям
            images.forEach((image, index) => {
                image.style.gridArea = randomCombination[index].gridArea;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables';
@import '@/assets/styles/functions';
.project {
    display: flex;
    border-radius: 10px;
    color: #fff;
    @include adaptiveValue("padding-top", 96, 80);
    @include adaptiveValue("padding-bottom", 96, 80);
    justify-content: space-between;
    height: 100%;   
    @media (max-width: 768px) {
            flex-direction: column-reverse;
        }
    &__content {
        display: flex;
        flex-direction: column;
        width: 32.2%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }

    &__title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: rem(24px);
    }

    &__tags {
        display: flex;
        flex-wrap: wrap;
        gap: rem(16px);
        padding-bottom: rem(16px);
    }

    &__tag {
        font-size: $font-size-b3;
        font-style: italic;
        padding: rem(12px) rem(16px);
        border-radius: rem(48px);
        border: 1px solid #B0AEAE;
    }

    &__body {
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: rem(16px);
        p {
            margin-bottom: 0.5rem;
        }
    }

    &__images {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 1rem;
        margin-top: 1rem;
        width: 57.5%;
        @media (max-width: 768px) {
        }
        .image-placeholder {
            background-color: #555;
            border-radius: 10px;
            
        }
    }

         &__carousel {
            width: 100%;
             .swiper-slide {
                 .image-placeholder {
                    background-color: #555;
                    border-radius: 10px;
                    height: 340px; // Примерная высота для карусели
                 }
             }
         }

    &__view-projects-button {
        height: fit-content;
    }
}
</style>
