<template>
    <div v-if="terminalData" class="frame" :class="classes" @click="isLandscapeScreen = !isLandscapeScreen">
        <div class="frame__top">
            <WidgetsPart
                :widgets-data="terminalData.widgetsPart"
                :is-landscape-screen="isLandscapeScreen"
                :device-type="terminalData.deviceType"
            />
        </div>
        <div class="frame__bottom">
            <BannersPart :banners-data="terminalData.bannersPart" :device-type="terminalData.deviceType" />
        </div>
    </div>
</template>

<script setup lang="ts">
import WidgetsPart from '@/components/WidgetsPart/WidgetsPart.vue';
import BannersPart from '@/components/BannersPart/BannersPart.vue';
import { computed, onMounted, Ref, ref, watch } from 'vue';
import { DEVICE_TYPE, TerminalData } from '@/api/types.ts';

const terminalData: Ref<null | TerminalData> = ref(null);
const isLandscapeScreen = ref(false);

const classes = computed(() => (terminalData.value?.deviceType ? terminalData.value.deviceType : ''));

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

watch(
    () => terminalData.value?.deviceType,
    (newValue) => {
        if (newValue === DEVICE_TYPE.TVinCON || newValue === DEVICE_TYPE.TV3840x2160) {
            document.documentElement.style.fontSize = 'calc(0.52084 * 1vw)';
        }
    },
    { immediate: true }
);
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

.TVinCON {
    grid-template-rows: none;
    grid-template-columns: 4fr 6fr;
}
.TV3840x2160 {
    grid-template-rows: none;
    grid-template-columns: 560fr 494fr;
}

.frame__top {
    position: relative;
}

.frame__bottom {
    position: relative;
}
</style>
