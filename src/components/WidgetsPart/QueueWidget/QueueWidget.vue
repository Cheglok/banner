<template>
    <div class="queue" :class="classes">
        <QueueGroup v-if="deviceType" :items="firstSevenItems" :deviceType="deviceType" />
        <template v-else-if="!fullHeight">
            <div class="container">
                <QueueGroup :items="smallQueue" small :timeString="timeString" :dateString="dateString" />
            </div>
        </template>
        <template v-else>
            <div class="top-timer container">
                <span class="heading">Очередь</span>
                <span class="time">{{ timeString }}</span>
                <span class="date">{{ dateString }}</span>
            </div>
            <div class="container">
                <QueueGroup :items="bigQueue" />
                <QueueGroup v-if="showBottomQueue" :items="bottomQueue" small tiny />
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { DEVICE_TYPE, QueueWidgetData } from '@/api/types.ts';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import QueueGroup from '@/components/WidgetsPart/QueueWidget/QueueGroup.vue';

const props = defineProps<{
    data: QueueWidgetData;
    fullHeight: boolean;
    deviceType?: DEVICE_TYPE;
}>();

let timer = 0;
const timeString = ref('');
const dateString = ref('');

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

const showBottomQueue = computed(() => sortedQueue.value.length > 12);

const smallQueue = computed(() => sortedQueue.value.slice(0, 11));

const bigQueue = computed(() => {
    if (showBottomQueue.value) {
        return sortedQueue.value.slice(0, 7);
    }
    return sortedQueue.value.slice(0, 12);
});

const bottomQueue = computed(() => {
    return sortedQueue.value.slice(7, 19);
});

const firstSevenItems = computed(() => sortedQueue.value.slice(0, 7));

const classes = computed(() => {
    return [
        { 'full-height': props.fullHeight },
        props.data.theme || 'black',
        props.deviceType ? `queue--${props.deviceType}` : '',
    ];
});

function updateTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    timeString.value = `${hours}:${minutes}`;
    dateString.value = date.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
    });
}

onMounted(() => {
    updateTime();
    timer = setInterval(updateTime, 1000);
});
onBeforeUnmount(() => {
    clearInterval(timer);
});
</script>

<style scoped lang="scss">
.queue {
    :deep {
        --background-primary-color: black;
        --background-active-color: transparent;
        --active-text-color: #ff0000;
        --background-inactive-color: transparent;
    }

    background: var(--background-primary-color);
    color: #fff;
    border-radius: 2.2rem;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    transition: var(--widget-transition);
    font-weight: bold;
    overflow: hidden;

    &.light {
        :deep {
            --background-primary-color: linear-gradient(90deg, #22547b 0%, #0593ae 100%);
            --background-active-color: #34c759;
            --active-text-color: #ffffff;
            --background-inactive-color: #ffffff33;
        }
    }

    &.full-height {
        height: 100vh;
        position: absolute;
        z-index: 2;
    }

    &--TVinCON,
    &--TV3840x2160 {
        padding: 5.25rem 8.65rem;
    }
}

.container {
    padding: 2rem;
    display: grid;
    gap: 3rem;
}

.top-timer {
    background: #00000033;
    border-radius: 0.4rem;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    font-size: 2.4rem;
    align-items: flex-end;
    gap: 0.8rem;
}

.heading {
    flex-grow: 1;
}

.date {
    font-size: 1.5rem;
}
</style>
