<template>
    <div v-if="data" class="traffics" :class="{ 'full-height': isFullHeight }" @click="isFullHeight = !isFullHeight">
        <h2 class="traffics__heading">Дорожная ситуация <span>cейчас</span></h2>
        <div class="traffics__content">
            Пробки
            <span class="traffic__current">
                {{ data.level }}
            </span>
            {{ pluralTraffics }}
        </div>
        <footer>
            <h2 class="traffics__heading">{{ data.description }}</h2>
            <p class="traffics__slogan" v-html="data.slogan"></p>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { TrafficsWidgetData } from '@/api/types.ts';
import { computed, ref } from 'vue';
import { pluralizeRussian } from '@/helpers/pluralizeWord.ts';

const props = defineProps<{
    data: TrafficsWidgetData;
}>();

const isFullHeight = ref(false);

const trafficsLights = [
    '#4CBB17',
    '#4CBB17',
    '#4CBB17',
    '#FFBA00',
    '#FFBA00',
    '#FFA000',
    '#FFA000',
    '#FF2400',
    '#FF2400',
    '#A50021',
];

const pluralTraffics = computed(() => pluralizeRussian(props.data.level, 'баллов', 'балл', 'балла', 'баллов'));
const currentColor = computed(() => trafficsLights[props.data.level]);
</script>

<style scoped lang="scss">
.traffics {
    font-size: 1.6rem;
    padding: 2rem;
    background: linear-gradient(90deg, #22547b 0%, #0593ae 100%);
    color: #fff;
    border-radius: 2.2rem;
    height: 100%;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: var(--widget-transition);
    z-index: 1;

    &.full-height {
        height: 100vh;
        position: absolute;
        z-index: 2;
        padding: 4rem 2rem;

        & .traffics__content {
            font-size: 4rem;
        }

        & .traffic__current {
            font-size: 20rem;
            width: 30rem;
            height: 30rem;
        }

        & .traffics__slogan {
            display: block;
        }
    }
}

.traffics__heading {
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0;

    span {
        text-decoration: underline;
    }
}

.traffics__content {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    text-align: center;
    font-weight: bold;
    transition: var(--widget-transition);
}

.traffic__current {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12.8rem;
    height: 12.8rem;
    border-radius: 50%;
    font-size: 9.4rem;
    background: v-bind(currentColor);
    transition: var(--widget-transition);
}

.traffics__slogan {
    display: none;
    margin: 1rem 0 0 0;
    font-size: 2.4rem;
    transition: var(--widget-transition);
}
</style>
