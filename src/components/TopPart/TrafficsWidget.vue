<template>
    <div v-if="data" class="traffics">
        <h2 class="traffics__heading">Дорожная ситуация <span>cейчас</span></h2>
        <div class="traffics__content">
            Пробки
            <span class="traffic__current">
                {{ trafficsData.level }}
            </span>
            баллов
        </div>
        <h2 class="traffics__heading">{{ trafficsData.description }}</h2>
    </div>
</template>

<script setup lang="ts">
import { TrafficsWidgetData } from '@/api/types.ts';

const props = defineProps<{
    data: TrafficsWidgetData;
}>();

const trafficsData = props.data;
</script>

<style scoped lang="scss">
.traffics {
    font-size: 1.6rem;
    padding: 2rem;
    background: linear-gradient(90deg, #5ab2f7 0%, #12cff3 100%);
    color: #fff;
    border-radius: 2.2rem;
    height: 100%;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
    gap: 4px;
    text-align: center;
}
.traffic__current {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12.8rem;
    height: 12.8rem;
    border-radius: 50%;
    font-size: 9.4rem;
    background: #ffa500;
}
</style>
