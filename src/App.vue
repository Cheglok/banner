<template>
    <div v-if="bannerData" class="frame">
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
import { Ref, ref } from 'vue';
import { TerminalData } from '@/api/types.ts';

const bannerData: Ref<null | TerminalData> = ref(null);
function loadData() {
    fetch('/data.json')
        .then((o) => o.json())
        .then((o) => (bannerData.value = o));
}
loadData();
setInterval(loadData, 1000);
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
