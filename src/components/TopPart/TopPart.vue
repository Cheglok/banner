<template>
    <Transition>
        <WeatherWidget v-show="currentComponent === 'weather'" :data="topData.widgets.weather" />
    </Transition>
    <Transition>
        <CurrencyWidget v-show="currentComponent === 'currency'" :data="topData.widgets.currency" />
    </Transition>
    <Transition>
        <TrafficsWidget v-show="currentComponent === 'traffics'" :data="topData.widgets.traffics" />
    </Transition>
</template>

<script setup lang="ts">
import CurrencyWidget from '@/components/TopPart/CurrencyWidget.vue';
import TrafficsWidget from '@/components/TopPart/TrafficsWidget.vue';
import { computed, onMounted, ref } from 'vue';
import WeatherWidget from '@/components/TopPart/WeatherWidget.vue';

import { TopPart } from '@/api/types.ts';

const props = defineProps<{
    topData: TopPart;
}>();

const currentComponent = computed(() => Object.keys(props.topData.widgets)[currentIndex.value]);

const currentIndex = ref(0);

onMounted(() => {
    setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % Object.keys(props.topData.widgets).length;
    }, props.topData.animationDuration);
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
