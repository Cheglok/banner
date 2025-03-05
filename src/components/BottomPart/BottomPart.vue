<template>
    <template v-for="(banner, index) in bottomData.banners" :key="index">
        <img
            :src="`/images/banners/${banner}`"
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
import { BottomPart } from '@/api/types.ts';

const props = defineProps<{
    bottomData: BottomPart;
}>();

const currentIndex = ref(0);

onMounted(() => {
    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % props.bottomData.banners.length;
    }, props.bottomData.animationDuration);
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
