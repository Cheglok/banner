<template>
    <div class="popup traffics">
        <div class="traffics__left">
            <h2 class="traffics__heading">Дорожная ситуация <span>cейчас</span></h2>
            <div class="traffics__description">{{ data.description }}</div>
        </div>
        <div class="traffics__level">
            {{ data.level }}
            <span class="traffics__plural">{{ pluralTraffics }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { TrafficsWidgetData } from '@/api/types.ts';
import { computed } from 'vue';
import { pluralizeRussian } from '@/helpers/pluralizeWord.ts';

const props = defineProps<{
    data: TrafficsWidgetData;
    isLandscapeScreen: boolean;
}>();

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
const currentColor = computed(() => trafficsLights[props.data.level - 1]);
</script>

<style scoped lang="scss">
.popup {
    height: 18rem;
    border-radius: 4.4rem;
    background: linear-gradient(88deg, #00bb8c 0%, #5ad303 184.89%);
}
.traffics {
    display: flex;
    align-items: center;
    color: var(--text-color);
}
.traffics__left {
    padding: 3.2rem;
    height: 100%;
}
.traffics__heading {
    font-size: 3.8rem;
    line-height: 2.7rem;
    font-weight: 700;
    margin: 0 0 3.5rem 0;
    & span {
        text-decoration: underline;
    }
}
.traffics__description {
    font-size: 3.2rem;
    line-height: 2.2rem;
    font-weight: 700;
    padding: 1.6rem 2.2rem;
    background: v-bind(currentColor);
    border-radius: 2.2rem;
    width: max-content;
}
.traffics__level {
    background: v-bind(currentColor);
    width: 18.1rem;
    height: 100%;
    border-radius: 11rem 0 0 11rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14rem;
    font-weight: 700;
    position: relative;
    margin-left: auto;
}
.traffics__plural {
    position: absolute;
    font-size: 3.2rem;
    line-height: 4rem;
    font-weight: 700;
    right: 16rem;
    top: 7rem;
    opacity: 0.8;
}
</style>
