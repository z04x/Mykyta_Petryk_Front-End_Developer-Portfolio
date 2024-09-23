<template>
    <Container>
        <div
            class="project"
            v-if="project"
        >
            <div class="project__content">
                <h2
                    v-if="isDesktop"
                    class="project__title"
                >{{ project.title }}</h2>
                <div
                    :class="{ 'project__tags--mobile': !isDesktop }"
                    class="project__tags"
                >
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
            <div
                class="project__images parent"
                v-if="isDesktop"
            >
                <img
                    ref="image1"
                    class="image-placeholder"
                    :src="project.images[0]"
                    alt="Project Image 1"
                >
                <img
                    ref="image2"
                    class="image-placeholder"
                    :src="project.images[1]"
                    alt="Project Image 2"
                >
                <img
                    ref="image3"
                    class="image-placeholder"
                    :src="project.images[2]"
                    alt="Project Image 3"
                >
            </div>
            <div
                class="project__carousel"
                v-else
            >
                <h2 class="project__title">
                    {{ project.title }}
                </h2>
                <swiper :options="swiperOptions">
                    <swiper-slide
                        v-for="(image, index) in project.images"
                        :key="index"
                    >
                        <div class="image-placeholder">
                            <img :src="image" alt="Project Image">
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination"></div>
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
        }
    },
    data() {
        return {
            project: null,
            isDesktop: window.innerWidth >= 768,
            swiperOptions: {
                slidesPerView: 1,
                spaceBetween: 10, // Добавьте отступ между слайдами
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            },
            combinationIndex: 0 // Добавьте индекс для отслеживания текущей комбинации
        };
    },
    created() {
        this.project = projects.find((proj) => proj.id === this.id);
        console.log('Project ID:', this.id);
        console.log('Project:', this.project);
    },
    computed: {
        translatedDescription() {
            if (this.project && this.project.descriptionKey) {
                return this.$t(this.project.descriptionKey);
            }
            return this.project ? this.project.description : '';
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
                    { gridArea: '2 / 1 / 3 / 3' },
                    { gridArea: '1 / 1 / 2 / 2' },
                    { gridArea: '1 / 2 / 2 / 3' }
                ],
            ];

            this.combinationIndex = (this.combinationIndex + 1) % combinations.length;
            const combination = combinations[this.combinationIndex];


            // Применение позиций к изображениям
            images.forEach((image, index) => {
                image.style.gridArea = combination[index].gridArea;
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
        width: 40.2%;
        @media (max-width: 768px) {
            width: 100%;
        }
    }

    &__title {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: rem(24px);
        &--mobile {
            @media (max-width: 768px) {
                order: -1;
                margin-bottom: rem(16px);
            }
        }
    }

    &__tags {
        display: flex;
        flex-wrap: wrap;
        gap: rem(16px);
        padding-bottom: rem(16px);
        &--mobile {
            padding-top: rem(16px);
        }
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
        max-height: rem(660px);
        height: 100%;
        .image-placeholder {
            object-fit: cover;
            overflow: hidden;
            border-radius: 10px;
            background-color: #555;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }   
        }
    }

    &__carousel {
        .swiper-slide {
            .image-placeholder {
                height: 50%; // Примерная высота для карусели
                width: 100%;
                border-radius: 10px;
                img {
                    border-radius: 10px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 98%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }
    }

    &__view-projects-button {
        height: fit-content;
    }

    &__content--mobile {
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
    }
}
</style>
