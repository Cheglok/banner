<template>
    <div class="banner-wrapper">
        <TransitionGroup name="fade" mode="out-in">
            <video
                v-if="currentBanner.type === 'video'"
                autoplay
                muted
                loop
                :key="'vid' + currentIndex"
                class="banner-media"
            >
                <source :src="currentBanner.src" type="video/mp4" />
            </video>
            <img
                v-if="currentBanner.type === 'image'"
                :key="currentIndex"
                :src="currentBanner.src"
                alt=""
                class="banner-media"
            />
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { BannersData } from '@/api/types.ts';

const props = defineProps<{
    bannersData: BannersData;
}>();

const currentIndex = ref(0);

const currentBanner = computed(() => props.bannersData.banners[currentIndex.value]);

function showNextBanner() {
    setTimeout(() => {
        currentIndex.value = (currentIndex.value + 1) % props.bannersData.banners.length;
        showNextBanner();
    }, props.bannersData.banners[currentIndex.value].animationDuration || props.bannersData.animationDuration);
}

onMounted(() => {
    showNextBanner();
});
</script>

<style scoped lang="scss">
.banner-wrapper {
    border-radius: 2.2rem;
    overflow: hidden;
    position: relative;
    height: 100%;
}
.banner-media {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
