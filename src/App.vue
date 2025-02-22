<template>
    <div class="frame">
        <div class="frame__top">
            <TopPart :top-data="topData" />
        </div>
        <div class="frame__bottom">
            <BottomPart :bottom-data="bottomData" />
        </div>
    </div>
</template>

<script setup lang="ts">
import TopPart from '@/components/TopPart/TopPart.vue';
import BottomPart from '@/components/BottomPart/BottomPart.vue';

export interface TopData {
    componentsList: string[];
    animationDuration: number;
}

export interface BottomData {
    imagesList: string[];
    animationDuration: number;
}

//Здесь можно получить данные с сервера
const bottomData: BottomData = {
    imagesList: [
        // список баннеров, которые показываем
        // "my-car-banner",
        // "astana-motors-banner",
        'nutcracker-banner',
    ],
    animationDuration: 2000,
};

const topData: TopData = {
    componentsList: [
        // список компонентов, которые показываем
        'traffics',
        // "currency",
        // "weather"
    ],
    animationDuration: 3000,
};
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
