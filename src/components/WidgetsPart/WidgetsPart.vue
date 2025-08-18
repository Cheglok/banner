<template>
    <div class="widgets" :class="{ 'widgets--portrait': !isLandscapeScreen }">
        <QueueWidget :data="widgetsData.widgets.queue" key="queue" class="widgets__top" />
        <div class="widgets__bottom-container">
            <PopupsZone class="widgets__bottom" :widgets="widgetsData.widgets" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { WidgetsData } from '@/api/types.ts';
import QueueWidget from '@/components/WidgetsPart/QueueWidget/QueueWidget.vue';
import PopupsZone from '@/components/Popups/PopupsZone.vue';
import { inject } from 'vue';

defineProps<{
    widgetsData: WidgetsData;
}>();

const isLandscapeScreen = inject('isLandscapeScreen');
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

.widgets__bottom-container {
    background-image: url('/images/logo.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
}

.widgets__bottom {
    height: 18rem;
    border-radius: 4.4rem;
    flex-shrink: 0;
}

.widgets--portrait {
    padding: 1.6rem;
    gap: 1.6rem;

    .widgets__bottom-container {
        background-size: 70%;
    }

    & .widgets__bottom {
        height: 6.6rem;
        border-radius: 1.6rem;
    }
}
</style>
