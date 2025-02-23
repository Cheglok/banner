<template>
    <div class="frame">
        <div class="frame__top">
            <TopPart :top-data="bannerData.topPart" />
        </div>
        <div class="frame__bottom">
            <BottomPart :bottom-data="bannerData.bottomPart" />
        </div>
    </div>
</template>

<script setup lang="ts">
import TopPart from '@/components/TopPart/TopPart.vue';
import BottomPart from '@/components/BottomPart/BottomPart.vue';
import { mockData } from '@/api/mockData.ts';

const bannerData = mockData; // TODO: получать данные из АПИ
</script>

<style scoped>
.frame {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: black;
    overflow: hidden;
}

.frame__top {
    height: 40vh;
    position: relative;
}

.frame__bottom {
    height: 60vh;
    position: relative;
}
</style>
