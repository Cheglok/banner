<template>
    <div class="outer-block" :style="{ transform: `translateY(${translateY}rem)` }">
        <WeatherPopup v-if="currentComponent === 'weather'" :data="widgets.weather" key="weather" />
        <CurrencyPopup v-if="currentComponent === 'currency'" :data="widgets.currency" key="currency" />
        <TrafficsPopup v-if="currentComponent === 'traffics'" :data="widgets.traffics" key="traffics" />
        <LocationPopup v-if="currentComponent === 'location'" :data="widgets.location" key="location" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, ComputedRef, inject } from 'vue';
import WeatherPopup from '@/components/Popups/WeatherPopup.vue';
import { Widgets } from '@/api/types.ts';
import CurrencyPopup from '@/components/Popups/CurrencyPopup.vue';
import TrafficsPopup from '@/components/Popups/TrafficsPopup.vue';
import LocationPopup from '@/components/Popups/LocationPopup.vue';
import { sleep } from '@/helpers';

const props = defineProps<{
    widgets: Widgets;
}>();

const popupsAnimationDuration: number = inject('popupsAnimationDuration') as number;

const filteredWidgets = computed(() => {
    return Object.keys(props.widgets).filter((widget) => widget !== 'queue');
});
const currentIndex = ref(0);
const currentComponent: ComputedRef<keyof Widgets> = computed(
    () => filteredWidgets.value[currentIndex.value] as keyof Widgets
);

const translateY = ref(22); // Начинаем за пределами экрана снизу

const showNextPopup = async () => {
    let animationDuration;
    switch (currentComponent.value) {
        case 'weather':
            animationDuration = (props.widgets.weather.animationDuration || popupsAnimationDuration) * 2;
            break;
        case 'currency':
            animationDuration =
                (props.widgets.currency.animationDuration || popupsAnimationDuration) *
                Object.keys(props.widgets.currency.currency_rates).length;
            break;
        case 'traffics':
            animationDuration = props.widgets.traffics.animationDuration || popupsAnimationDuration;
            break;
        case 'location':
            animationDuration =
                (props.widgets.location.animationDuration || popupsAnimationDuration) *
                props.widgets.location.routes.length;
            break;
        default:
            animationDuration = popupsAnimationDuration;
    }
    translateY.value = 0; // компонент появляется
    await sleep(800); // задержка на появление
    await sleep(animationDuration); // компонент существует до конца анимации
    await sleep(800); // успеть посмотреть последний блок
    translateY.value = 22;
    await sleep(800); // компонент исчезает
    await sleep(1000); // перерыв между компонентами
    currentIndex.value = (currentIndex.value + 1) % Object.keys(filteredWidgets.value).length; // переход к следующему компоненту
    showNextPopup();
};

onMounted(() => {
    showNextPopup();
});
</script>

<style scoped>
.outer-block {
    overflow: hidden;
    position: relative;
    transition: transform 0.8s ease;
}
</style>
