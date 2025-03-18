<template>
    <div v-if="terminalData" class="frame" @click="isLandscapeScreen = !isLandscapeScreen">
        <div class="frame__top">
            <WidgetsPart :widgets-data="terminalData.widgetsPart" :is-landscape-screen="isLandscapeScreen" />
        </div>
        <div class="frame__bottom">
            <BannersPart :banners-data="terminalData.bannersPart" />
        </div>
    </div>
</template>

<script setup lang="ts">
import WidgetsPart from '@/components/WidgetsPart/WidgetsPart.vue';
import BannersPart from '@/components/BannersPart/BannersPart.vue';
import { onMounted, Ref, ref } from 'vue';
import { TerminalData } from '@/api/types.ts';

const terminalData: Ref<null | TerminalData> = ref(null);
const isLandscapeScreen = ref(false);
function loadData() {
    fetch('/data.json')
        .then((o) => o.json())
        .then((o) => (terminalData.value = o));
}
loadData();
setInterval(loadData, 1000);

onMounted(() => {
    isLandscapeScreen.value = window.innerWidth > window.innerHeight;
});
</script>

<style scoped>
.frame {
    display: grid;
    grid-template-rows: 4fr 6fr;
    width: 100vw;
    height: 100vh;
    background: black;
    overflow: hidden;
    @media (orientation: landscape) {
        grid-template-rows: none;
        grid-template-columns: 50vh auto;
    }
}

.frame__top {
    position: relative;
}

.frame__bottom {
    position: relative;
}
</style>
