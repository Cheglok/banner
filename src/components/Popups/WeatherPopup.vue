<template>
    <div
        class="popup weather"
        :class="{ 'popup--portrait': !isLandscapeScreen }"
        :style="{ transform: `translateY(${translateValue}rem)` }"
    >
        <div class="weather__info">
            <span class="weather__temperature">{{ data.temperature }}º</span>
            <div class="weather__heading-container">
                <h2 class="weather__heading">{{ data.title }}</h2>
                <span class="weather__date">{{ data.date }}</span>
                <span class="weather__description">{{ data.description }}</span>
            </div>
        </div>
        <img class="weather__image" :src="`/images/weather-icons/${data.backgroundIcon}.svg`" />
    </div>
    <div
        class="popup weather-details"
        :class="{ 'popup--portrait': !isLandscapeScreen }"
        :style="{ transform: `translateY(${translateValue}rem)` }"
    >
        <ul class="weather__hours">
            <li v-for="hour in data.hours" class="weather__hour" :key="hour.hour">
                <div class="weather__hour-name">{{ hour.hour }}</div>
                <img :src="`/images/weather-icons/${hour.icon}.svg`" :alt="hour.icon" class="weather__icon" />
                {{ hour.temp }}°
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { WeatherWidgetData } from '@/api/types.ts';
import { onMounted, ref, computed } from 'vue';
import { sleep } from '@/helpers/sleep.ts';
import { DEFAULT_POPUP_ANIMATION_DURATION } from '@/constants/constants.ts';

const props = defineProps<{
    data: WeatherWidgetData;
    isLandscapeScreen: boolean;
}>();

const currentIndex = ref(0);
const translateValue = computed(() => currentIndex.value * (-1 * (props.isLandscapeScreen ? 18 : 6.6)));

onMounted(async () => {
    await sleep(500);
    setTimeout(() => {
        currentIndex.value = 1;
    }, props.data.animationDuration || DEFAULT_POPUP_ANIMATION_DURATION);
});
</script>

<style scoped lang="scss">
.popup {
    height: 18rem;
    border-radius: 4.4rem;
    background: linear-gradient(88deg, #00bb8c 0%, #5ad303 184.89%);
    transition: transform 0.5s ease;
}

.weather {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.2rem;
    color: var(--text-color);
}
.weather__info {
    display: flex;
    align-items: center;
    gap: 1.2rem;
}

.weather__temperature {
    font-size: 15rem;
    line-height: 15rem;
    font-weight: 700;
    letter-spacing: -0.2rem;
}

.weather__heading-container {
    display: grid;
    font-size: 2.8rem;
    gap: 0.2rem;
}

.weather__heading {
    font-weight: 700;
    margin: 0;
    font-size: inherit;
}

.weather__date {
    font-weight: 500;
}

.weather__description {
    opacity: 0.8;
}

.weather__image {
    height: 100%;
}

.weather-details {
    padding: 2rem;
    color: var(--text-color);
}

.weather__hours {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 100%;
}

.weather__hour {
    display: grid;
    justify-items: center;
    gap: 1rem;
    text-align: center;
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 2.2rem;
}

.weather__hour-name {
    font-size: 2.7rem;
    line-height: 1.9rem;
}

.weather__icon {
    width: 7rem;
    height: 7rem;
}

.popup--portrait {
    height: 6.6rem;
    border-radius: 1.6rem;
    &.weather {
        padding: 1.2rem;
    }
    .weather__temperature {
        font-size: 6rem;
        line-height: 6rem;
        letter-spacing: -0.2rem;
    }
    .weather__heading-container {
        font-size: 1rem;
    }
    &.weather-details {
        padding: 0.8rem;
    }
    .weather__hour {
        gap: 0.4rem;
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 0.8rem;
    }
    .weather__hour-name {
        font-size: 1rem;
        line-height: 0.7rem;
    }
    .weather__icon {
        width: 2.6rem;
        height: 2.6rem;
    }
}
</style>
