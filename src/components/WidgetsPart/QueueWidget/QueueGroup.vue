<template>
    <div class="group" :class="{ 'group--portrait': !isLandscapeScreen }">
        <div class="group__headers">
            <div class="group__header">
                <span class="group__header-text"
                    >нөмір<template v-if="!isLandscapeScreen">/</template><template v-else><br /></template>номер</span
                >
                <span class="group__header-text"
                    >терезе<template v-if="!isLandscapeScreen">/</template><template v-else><br /></template>окно</span
                >
            </div>
            <div class="group__header">
                <span class="group__header-text"
                    >нөмір<template v-if="!isLandscapeScreen">/</template><template v-else><br /></template>номер</span
                >
                <span class="group__header-text"
                    >терезе<template v-if="!isLandscapeScreen">/</template><template v-else><br /></template>окно</span
                >
            </div>
        </div>
        <TransitionGroup name="list" tag="ul" class="group__list">
            <li
                v-for="item in items"
                :class="['group__item', { 'group__item--active': item.active }]"
                :key="item.number"
            >
                <div class="left-part">
                    <span class="number">{{ item.number.padStart(4, '0') }}</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.36612 19.6339C7.85427 20.122 8.64573 20.122 9.13388 19.6339L16.5178 12.25L9.13389 4.86612C8.64573 4.37796 7.85427 4.37796 7.36612 4.86612C6.87796 5.35427 6.87796 6.14573 7.36612 6.63388L12.9822 12.25L7.36612 17.8661C6.87796 18.3543 6.87796 19.1457 7.36612 19.6339Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <span class="window-number">{{ item.window.padStart(2, '0') }}</span>
            </li>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { QueueItem } from '@/api/types.ts';
import { inject } from 'vue';

defineProps<{
    items: QueueItem[];
}>();

const isLandscapeScreen = inject('isLandscapeScreen');
</script>

<style scoped lang="scss">
.group {
    display: grid;
    gap: 1.6rem;
    width: 100%;
}

.group__headers {
    display: flex;
    gap: 3.2rem;
}

.group__header {
    display: flex;
    justify-content: space-between;
    height: 10rem;
    font-size: 3.2rem;
    text-transform: uppercase;
    flex-grow: 1;
}

.group__header-text {
    text-align: center;
    padding: 1.2rem 2.2rem;
    position: relative;
    background: var(--background-inactive-color);
    border-radius: 3.2rem;
    width: 14.9rem;

    &::after {
        content: '';
        display: block;
        width: 70%;
        height: 0.3rem;
        background: var(--text-color);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
}

.group__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(5, 11.4rem);
    column-gap: 3.2rem;
    gap: 1.6rem;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style-type: none;
    position: relative;
    align-items: stretch;
}

.group__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 10rem;
    text-align: center;
    padding: 2.2rem;
    background: var(--background-inactive-color);
    border-radius: 4.4rem;

    &--active {
        background: var(--background-active-color);
    }
}

.left-part {
    width: 29rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.list-move {
    transition: transform 0.8s ease;
}

.list-enter-active {
    transition: all 0.8s ease;
}

.list-enter-from {
    opacity: 0;
}

.list-leave-to {
    position: absolute;
    opacity: 0;
}

.arrow-icon {
    width: 4rem;
    height: 4rem;
}

.group--portrait {
    gap: 0.4rem;
    .group__headers {
        gap: 1.2rem;
    }
    .group__header {
        height: 1.4rem;
        font-size: 1rem;
    }
    .group__header-text {
        padding: 0.2rem 0.4rem 0 0.4rem;
        border-radius: 0.4rem;
        width: unset;

        &::after {
            display: none;
        }
    }
    .group__list {
        grid-template-rows: repeat(4, 3.8rem);
        gap: 0.4rem;
        column-gap: 1.2rem;
    }
    .group__item {
        font-size: 3.2rem;
        padding: 0.8rem;
        border-radius: 0.8rem;
    }
    .arrow-icon {
        width: 2rem;
        height: 2rem;
    }
    .left-part {
        width: 11rem;
    }
}
</style>
