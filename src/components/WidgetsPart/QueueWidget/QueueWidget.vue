<template>
    <div class="queue">
        <QueueGroup :items="trimmedQueue" :is-landscape-screen="isLandscapeScreen" />
    </div>
</template>

<script setup lang="ts">
import { QueueWidgetData } from '@/api/types.ts';
import { computed } from 'vue';
import QueueGroup from '@/components/WidgetsPart/QueueWidget/QueueGroup.vue';

const props = defineProps<{
    data: QueueWidgetData;
    isLandscapeScreen: boolean;
}>();

const sortedQueue = computed(() =>
    [...props.data.queue].sort((a, b) => {
        if (a.active && !b.active) {
            return -1;
        }
        if (!a.active && b.active) {
            return 1;
        }
        return 0;
    })
);

const trimmedQueue = computed(() => sortedQueue.value.slice(0, props.isLandscapeScreen ? 10 : 8));
</script>

<style scoped lang="scss">
.queue {
    :deep {
        --background-primary-color: black;
        --background-active-color: #34c759;
        --background-inactive-color: #4b4b4b;
    }

    color: var(--text-color);
    border-radius: 2.2rem;
    transition: var(--widget-transition);
    font-weight: bold;
    overflow: hidden;
}
</style>
