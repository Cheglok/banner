<template>
    <div v-if="data" class="weather">
        <h2 class="weather__heading">{{ weatherData.title }}</h2>
        <div class="weather__content">
            {{ weatherData.date }}
            <div class="weather__conditions">
                <span class="weather__temperature">{{ weatherData.temperature }}°</span>
                <span class="weather__description">{{ weatherData.description }}</span>
            </div>
        </div>
        <ul class="weather__week">
            <li v-for="day in weatherData.days" class="weather__day" :key="day.day">
                <div class="weather__day-name">{{ day.day }}</div>
                <img :src="`/images/weather-icons/${day.weather}.svg`" :alt="day.weather" class="weather__icon" />
                {{ day.temp }}°
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { WeatherWidgetData } from '@/api/types.ts';

const props = defineProps<{
    data: WeatherWidgetData;
}>();

const weatherData = computed(() => props.data);
</script>

<style scoped lang="scss">
.weather {
    padding: 2em;
    background:
        url('/images/Clouds.svg') no-repeat right 2.3rem,
        linear-gradient(90deg, #5ab2f7 0%, #12cff3 100%);
    color: #fff;
    border-radius: 2.2em;
    height: 100%;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.weather__heading {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0;
}

.weather__content {
    display: grid;
    gap: 0.8rem;
    font-size: 1.6rem;
}

.weather__conditions {
    display: grid;
    width: min-content;
    justify-items: center;
    font-weight: bold;
}

.weather__temperature {
    font-size: 7.6rem;
    line-height: 9.4rem;
}
.weather__description {
    opacity: 0.8;
}

.weather__week {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1.6rem;
    font-weight: bold;
}

.weather__icon {
    width: 2.4rem;
    height: 2.4rem;
}
.weather__day {
    display: grid;
    gap: 0.3rem;
    justify-items: center;
}
.weather__day-name {
    &::first-letter {
        text-transform: uppercase;
    }
}
</style>
