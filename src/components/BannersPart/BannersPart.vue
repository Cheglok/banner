<template>
    <template v-for="(banner, index) in bannersData.banners" :key="index">
        <img
            :src="banner"
            :class="[
                'bottom-banner',
                { 'active-image': index === currentIndex, 'inactive-image': index !== currentIndex },
            ]"
            alt=""
        />
    </template>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BannersData } from '@/api/types.ts';

const props = defineProps<{
    bannersData: BannersData;
}>();

const currentIndex = ref(0);

onMounted(() => {
    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.bannersData.banners.length;
    }, props.bannersData.animationDuration);
});
</script>

<style scoped lang="scss">
.bottom-banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    border-radius: 2.2rem;
}

.active-image {
    opacity: 1;
    transition: opacity 0.9s ease;
}

.inactive-image {
    opacity: 0;
    transition: opacity 0.9s ease;
}
</style>
