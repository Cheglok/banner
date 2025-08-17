<template>
    <div class="widgets">
        <QueueWidget
            :data="widgetsData.widgets.queue"
            key="queue"
            :is-landscape-screen="isLandscapeScreen"
            class="widgets__top"
        />
        <PopupsZone class="widgets__bottom" :widgets="widgetsData.widgets" :is-landscape-screen="isLandscapeScreen">
        </PopupsZone>
    </div>
</template>

<script setup lang="ts">
import { WidgetsData } from '@/api/types.ts';
import QueueWidget from '@/components/WidgetsPart/QueueWidget/QueueWidget.vue';
import PopupsZone from '@/components/Popups/PopupsZone.vue';
defineProps<{
    widgetsData: WidgetsData;
    isLandscapeScreen: boolean;
}>();
</script>

<style scoped lang="scss">
.widgets {
    position: relative;
    padding: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    height: 100%;
    overflow: hidden;
}

.widgets__top {
    height: 100%;
}

.widgets__bottom {
    height: 18rem;
    border-radius: 4.4rem;
    flex-shrink: 0;
}

//.v-enter-active,
//.v-leave-active {
//    transition: opacity 0.5s ease;
//}
//
//.v-enter-from,
//.v-leave-to {
//    opacity: 0;
//}
</style>
