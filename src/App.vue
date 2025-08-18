<template>
    <div v-if="terminalData" class="frame">
        <WidgetsPart :widgets-data="terminalData.widgetsPart" />
        <BannersPart :banners-data="terminalData.bannersPart" />
    </div>
</template>

<script setup lang="ts">
import WidgetsPart from '@/components/WidgetsPart/WidgetsPart.vue';
import BannersPart from '@/components/BannersPart/BannersPart.vue';
import { provide, Ref, ref } from 'vue';
import { TerminalData } from '@/api/types.ts';

const terminalData: Ref<null | TerminalData> = ref(null);
const isLandscapeScreen = window.innerWidth > window.innerHeight;

provide('isLandscapeScreen', isLandscapeScreen);
provide('popupsAnimationDuration', terminalData.value?.widgetsPart?.animationDuration ?? 4000);

function loadData() {
    fetch('/data.json')
        .then((o) => o.json())
        .then((o) => (terminalData.value = o));
}

loadData();
setInterval(loadData, 1000);
</script>

<style>
.frame {
    display: grid;
    grid-template-rows: 4fr 6fr;
    width: 100vw;
    height: 100vh;
    background: black;
    overflow: hidden;
    @media (orientation: landscape) {
        grid-template-rows: none;
        grid-template-columns: 53% 47%;
    }
}
</style>
