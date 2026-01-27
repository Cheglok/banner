<template>
    <div class="widgets">
        <header class="widgets__header" :class="{ 'widgets__header--portrait': !isLandscapeScreen }">
            <span>{{ formattedTime }}</span>
            <img src="/images/logo.svg" alt="logo" class="widgets__logo" />
        </header>
        <div class="widgets__content" :class="{ 'widgets__content--portrait': !isLandscapeScreen }">
            <QueueWidget :data="widgetsData.widgets.queue" key="queue" />
            <div class="widgets__bottom-container">
                <PopupsZone class="widgets__bottom" :widgets="widgetsData.widgets" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { WidgetsData } from '@/api/types.ts';
import QueueWidget from '@/components/WidgetsPart/QueueWidget/QueueWidget.vue';
import PopupsZone from '@/components/Popups/PopupsZone.vue';
import { inject, onMounted, onUnmounted, ref } from 'vue';

defineProps<{
    widgetsData: WidgetsData;
}>();

const isLandscapeScreen = inject('isLandscapeScreen');
const formattedTime = ref('');
let interval: number = 0;
const updateDateTime = () => {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeStr = `${hours}:${minutes}`;

    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const year = String(now.getFullYear()).slice(-2); // Последние 2 цифры года
    const dateStr = `${day}.${month}.${year}`;

    formattedTime.value = `${timeStr} / ${dateStr}`;
};

onMounted(() => {
    updateDateTime();
    // Обновляем каждую минуту
    interval = setInterval(updateDateTime, 60000);
});
// Очищаем интервал при размонтировании
onUnmounted(() => {
    clearInterval(interval);
});
</script>

<style scoped lang="scss">
.widgets__header {
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 3.2rem;
    align-items: flex-end;
    font-size: 3.2rem;
    letter-spacing: -0.64px;
    color: var(--text-color);
    border-radius: 0 0 3.2rem 3.2rem;
    background-color: #282828;
    .widgets__logo {
        width: 5rem;
        height: 5rem;
    }
}

.widgets__header--portrait {
    padding: 0.4rem 1.6rem 0.2rem 1.6rem;
    align-items: center;
    font-size: 1.2rem;
    letter-spacing: -0.24px;
    border-radius: 0 0 1.2rem 1.2rem;
    .widgets__logo {
        width: 1.8rem;
        height: 1.8rem;
    }
}

.widgets__content {
    position: relative;
    padding: 1.2rem 3.2rem 3.2rem 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    height: 100%;
    overflow: hidden;
}

.widgets__bottom-container {
    background-image: url('/images/watermark.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 80%;
}

.widgets__bottom {
    height: 18rem;
    border-radius: 4.4rem;
    flex-shrink: 0;
}

.widgets__content--portrait {
    padding: 0.4rem 1.6rem 1.6rem 1.6rem;
    gap: 1.6rem;

    .widgets__bottom-container {
        background-size: 77%;
    }

    & .widgets__bottom {
        height: 6.6rem;
        border-radius: 1.6rem;
    }
}
</style>
