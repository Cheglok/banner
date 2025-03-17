<template>
    <TransitionGroup>
        <WeatherWidget
            v-if="currentComponent === 'weather'"
            :data="widgetsData.widgets.weather"
            key="weather"
            :full-height="isLandscapeScreen"
        />
        <CurrencyWidget
            v-if="currentComponent === 'currency'"
            :data="widgetsData.widgets.currency"
            key="currency"
            :full-height="isLandscapeScreen"
        />
        <TrafficsWidget
            v-if="currentComponent === 'traffics'"
            :data="widgetsData.widgets.traffics"
            key="traffics"
            :full-height="isLandscapeScreen"
        />
        <QueueWidget
            v-if="currentComponent === 'queue'"
            :data="widgetsData.widgets.queue"
            key="queue"
            :full-height="isLandscapeScreen"
        />
    </TransitionGroup>
</template>

<script setup lang="ts">
import CurrencyWidget from '@/components/WidgetsPart/CurrencyWidget.vue';
import TrafficsWidget from '@/components/WidgetsPart/TrafficsWidget.vue';
import { computed, onMounted, ref } from 'vue';
import WeatherWidget from '@/components/WidgetsPart/WeatherWidget.vue';

import { WidgetsData } from '@/api/types.ts';
import QueueWidget from '@/components/WidgetsPart/QueueWidget/QueueWidget.vue';

const props = defineProps<{
    widgetsData: WidgetsData;
}>();

const isLandscapeScreen = ref(false);

const currentComponent = computed(() => Object.keys(props.widgetsData.widgets)[currentIndex.value]);

const currentIndex = ref(0);

onMounted(() => {
    isLandscapeScreen.value = window.innerWidth > window.innerHeight;
    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % Object.keys(props.widgetsData.widgets).length;
    }, props.widgetsData.animationDuration);
});
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
