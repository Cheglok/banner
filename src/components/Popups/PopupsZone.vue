<template>
    <div class="outer-block" :style="{ transform: `translateY(${translateY}rem)` }">
        <WeatherPopup
            v-if="currentComponent === 'weather'"
            :data="widgets.weather"
            key="weather"
            :is-landscape-screen="isLandscapeScreen"
        />
        <CurrencyPopup
            v-if="currentComponent === 'currency'"
            :is-landscape-screen="isLandscapeScreen"
            :data="widgets.currency"
            key="currency"
        />
        <TrafficsPopup
            v-if="currentComponent === 'traffics'"
            :is-landscape-screen="isLandscapeScreen"
            :data="widgets.traffics"
            key="traffics"
        />
        <LocationPopup
            v-if="currentComponent === 'location'"
            :is-landscape-screen="isLandscapeScreen"
            :data="widgets.location"
            key="location"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, ComputedRef } from 'vue';
import WeatherPopup from '@/components/Popups/WeatherPopup.vue';
import { Widgets } from '@/api/types.ts';
import CurrencyPopup from '@/components/Popups/CurrencyPopup.vue';
import TrafficsPopup from '@/components/Popups/TrafficsPopup.vue';
import LocationPopup from '@/components/Popups/LocationPopup.vue';
import { sleep } from '@/helpers/sleep.ts';
import { DEFAULT_POPUP_ANIMATION_DURATION } from '@/constants/constants.ts';

const props = defineProps<{
    widgets: Widgets;
    isLandscapeScreen: boolean;
}>();

const filteredWidgets = computed(() => {
    return Object.keys(props.widgets).filter((widget) => widget !== 'queue');
});
const currentIndex = ref(0);
const currentComponent: ComputedRef<keyof Widgets> = computed(
    () => filteredWidgets.value[currentIndex.value] as keyof Widgets
);

const translateY = ref(22); // Начинаем за пределами экрана снизу

const showNextPopup = async () => {
    let popupAnimationDuration;
    switch (currentComponent.value) {
        case 'weather':
            popupAnimationDuration = (props.widgets.weather.animationDuration || DEFAULT_POPUP_ANIMATION_DURATION) * 2;
            break;
        case 'currency':
            popupAnimationDuration =
                (props.widgets.currency.animationDuration || DEFAULT_POPUP_ANIMATION_DURATION) *
                Object.keys(props.widgets.currency.currency_rates).length;
            break;
        case 'traffics':
            popupAnimationDuration = props.widgets.traffics.animationDuration || DEFAULT_POPUP_ANIMATION_DURATION;
            break;
        case 'location':
            popupAnimationDuration =
                (props.widgets.location.animationDuration || DEFAULT_POPUP_ANIMATION_DURATION) *
                props.widgets.location.routes.length;
            break;
        default:
            popupAnimationDuration = DEFAULT_POPUP_ANIMATION_DURATION;
    }
    translateY.value = 0; // компонент появляется
    await sleep(popupAnimationDuration); // компонент существует до конца анимации
    translateY.value = 22;
    await sleep(500); // компонент исчезает
    await sleep(1000); // между компонентами
    currentIndex.value = (currentIndex.value + 1) % Object.keys(filteredWidgets.value).length; // переход к следующему компоненту
    showNextPopup();
};

onMounted(() => {
    showNextPopup();
});
</script>

<style scoped>
.outer-block {
    width: 100%;
    overflow: hidden;
    position: relative;
    transition: transform 0.5s ease;
}
</style>
