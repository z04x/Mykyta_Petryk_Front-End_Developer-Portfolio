<!-- src/components/ProjectComponent/ProjectImages.vue -->
<template>
    <div class="project__images parent">
        <img
            v-for="(image, index) in images"
            :key="index"
            :ref="setImageRef(index)"
            :src="image"
            :alt="'Project Image ' + (index + 1)"
            class="image-placeholder"
        />
    </div>
</template>

<script>
import { nextTick } from 'vue';

export default {
    name: 'ProjectImages',
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            combinationIndex: 0,
            imageRefs: []
        };
    },
    mounted() {
        nextTick(() => {
            this.randomizeImagePositions();
        });
    },
    methods: {
        setImageRef(index) {
            return (el) => {
                this.imageRefs[index] = el;
            };
        },
        randomizeImagePositions() {
            const images = this.imageRefs;

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

            images.forEach((image, index) => {
                if (image) {
                    image.style.gridArea = combination[index].gridArea;
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/ProjectStyles/ProjectImages.scss';
</style>