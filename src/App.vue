<template>
    <div class="frame">
        <TopPart class="frame__top" />
        <BottomPart class="frame__bottom" />
    </div>
</template>

<script setup lang="ts">
import TopPart from '@/components/TopPart.vue';
import BottomPart from '@/components/BottomPart.vue';
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
    flex-grow: 4;
}
.frame__bottom {
    flex-grow: 6;
}
</style>
