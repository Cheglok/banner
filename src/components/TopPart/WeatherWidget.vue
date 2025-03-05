<template>
    <div v-if="data" class="weather" :class="{ 'full-height': isFullHeight }" @click="isFullHeight = !isFullHeight">
        <h2 class="weather__heading">{{ weatherData.title }}</h2>
        <div class="weather__content">
            <span class="weather__date">{{ weatherData.date }}</span>
            <div class="weather__conditions">
                <span class="weather__temperature">{{ weatherData.temperature }}º</span>
                <span class="weather__description">{{ weatherData.description }}</span>
            </div>
        </div>
        <ul class="weather__hours">
            <li v-for="hour in weatherData.hours" class="weather__hour" :key="hour.hour">
                <div class="weather__hour-name">{{ hour.hour }}</div>
                <img :src="`/images/weather-icons/${hour.icon}.svg`" :alt="hour.icon" class="weather__icon" />
                {{ hour.temp }}°
            </li>
        </ul>
        <p class="weather__slogan" v-html="weatherData.slogan"></p>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { WeatherWidgetData } from '@/api/types.ts';

const props = defineProps<{
    data: WeatherWidgetData;
}>();

const isFullHeight = ref(false); //TODO убрать

const weatherData = computed(() => props.data);

const backgroundImageUrl = computed(() => `url('/images/weather-icons/${weatherData.value.backgroundIcon}.svg')`);
</script>

<style scoped lang="scss">
.weather {
    --url: v-bind(backgroundImageUrl);
    padding: 2em;
    background:
        var(--url) no-repeat 22rem -2.3rem,
        linear-gradient(90deg, #22547b 0%, #0593ae 100%);
    background-size: 55%, 100%;
    color: #fff;
    border-radius: 2.2em;
    height: 100%;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: var(--widget-transition);
    z-index: 1;

    & * {
        transition: var(--widget-transition);
    }

    &.full-height {
        height: 100vh;
        position: absolute;
        z-index: 2;
        padding: 4rem 2rem;
        justify-content: flex-start;
        background-position:
            22rem 7rem,
            0 0;

        & .weather__heading {
            margin-bottom: 21rem;
        }

        & .weather__date {
            font-size: 3.2rem;
        }

        & .weather__content {
            margin-bottom: 5rem;
        }

        & .weather__temperature {
            font-size: 12.8rem;
        }

        & .weather__slogan {
            display: block;
            margin-top: auto;
        }
    }
}

.weather__heading {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0;
}

.weather__content {
    padding-top: 18px;
    display: grid;
    gap: 0.8rem;
    font-size: 1.4rem;
}

.weather__conditions {
    font-weight: bold;
}

.weather__temperature {
    font-size: 7.6rem;
    line-height: 9.4rem;
}

.weather__description {
    opacity: 0.8;
    font-size: 1.4rem;
}

.weather__hours {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1.4rem;
    font-weight: bold;
}

.weather__icon {
    width: 4rem;
    height: 4rem;
}

.weather__hour {
    display: grid;
    gap: 0.4rem;
    justify-items: center;
}

.weather__hour-name {
    &::first-letter {
        text-transform: uppercase;
    }
}

.weather__slogan {
    margin: 0;
    font-size: 2.4rem;
    font-weight: bold;
    display: none;
}
</style>
