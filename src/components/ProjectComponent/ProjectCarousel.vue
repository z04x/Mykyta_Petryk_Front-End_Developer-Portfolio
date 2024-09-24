<!-- src/components/ProjectComponent/ProjectCarousel.vue -->
<template>
    <div class="project__carousel">
        <h2 class="project__title">{{ projectTitle }}</h2>
        <swiper :options="swiperOptions">
            <swiper-slide
                v-for="(image, index) in images"
                :key="index"
            >
                <div class="image-placeholder">
                    <img
                        :src="image"
                        alt="Project Image"
                    >
                </div>
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
    name: 'ProjectCarousel',
    components: {
        Swiper,
        SwiperSlide
    },
    props: {
        images: {
            type: Array,
            required: true
        },
        swiperOptions: {
            type: Object,
            required: true
        },
        projectTitle: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/ProjectStyles/ProjectCarousel.scss';
</style>