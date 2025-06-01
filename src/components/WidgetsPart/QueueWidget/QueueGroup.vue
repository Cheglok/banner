<template>
    <div class="group" :class="{ 'group--small': small, 'group--tiny': tiny, 'group--TVinCON': TVinCON }">
        <div class="group__headers">
            <div class="group__header">
                <span class="group__header-text">нөмір номер</span>
                <span class="group__header-text">терезе окно</span>
            </div>
            <div v-if="small" class="group__header">
                <span class="group__header-text">нөмір номер</span>
                <span class="group__header-text">терезе окно</span>
            </div>
        </div>
        <TransitionGroup name="list" tag="ul" class="group__list">
            <li
                v-for="(item, index) in items"
                :class="['group__item', { 'group__item--active': item.active || (!index && !tiny) }]"
                :key="item.number"
            >
                <div class="left-part">
                    <span class="number">{{ item.number }}</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M7.36612 19.6339C7.85427 20.122 8.64573 20.122 9.13388 19.6339L16.5178 12.25L9.13389 4.86612C8.64573 4.37796 7.85427 4.37796 7.36612 4.86612C6.87796 5.35427 6.87796 6.14573 7.36612 6.63388L12.9822 12.25L7.36612 17.8661C6.87796 18.3543 6.87796 19.1457 7.36612 19.6339Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <span class="window-number">{{ item.window }}</span>
            </li>
            <li class="datetime" v-if="timeString && dateString">
                <span class="time">{{ timeString }}</span>
                {{ dateString }}
            </li>
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import { QueueItem } from '@/api/types.ts';

defineProps<{
    items: QueueItem[];
    small?: boolean;
    tiny?: boolean;
    TVinCON?: boolean;
    timeString?: string;
    dateString?: string;
}>();
</script>

<style scoped lang="scss">
.group {
    width: 100%;
    min-height: 1rem;
    display: grid;
    gap: 0.4rem;

    &--small {
        .group__header {
            height: 2.6rem;
            font-size: 1rem;
        }

        .group__header-text {
            width: 5rem;
        }

        .group__list {
            grid-template-columns: 1fr 1fr;
            grid-auto-flow: column;
            grid-template-rows: repeat(6, 3.6rem);
            column-gap: 1.4rem;
        }

        .group__item {
            font-size: 2rem;
        }

        .left-part {
            width: 62%;
        }
    }

    &--tiny {
        .group__list {
            grid-template-columns: 1fr 1fr;
            grid-auto-flow: column;
            grid-template-rows: repeat(6, 3.1rem);
            column-gap: 1.4rem;
        }
    }

    &--TVinCON {
        gap: 1.6rem;

        .group__header {
            height: 10rem;
            font-size: 3.2rem;
        }

        .group__header-text {
            width: 15.3rem;
            padding: 1.2rem 2.2rem;
            border-radius: 1.6rem;

            &::after {
                height: 0.2rem;
            }
        }

        .group__list {
            display: grid;
            gap: 1.6rem;
            grid-auto-rows: 10.9rem;
        }

        .group__item {
            font-size: 7.2rem;
            padding: 1rem 2.2rem;
            border-radius: 1.6rem;
        }

        .window-number {
            &::after {
                height: 0.4rem;
            }
        }

        .arrow-icon {
            width: 6rem;
            height: 6rem;
        }
    }
}

.group__headers {
    display: flex;
    gap: 1.4rem;
}

.group__header {
    display: flex;
    justify-content: space-between;
    height: 4.2rem;
    font-size: 1.6rem;
    text-transform: uppercase;
    flex-grow: 1;
}

.group__header-text {
    text-align: center;
    padding: 0.2rem 0.8rem;
    position: relative;
    background: #ffffff33;
    border-radius: 0.4rem;
    width: 7rem;

    &::after {
        content: '';
        display: block;
        width: 70%;
        height: 0.1rem;
        background: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        position: absolute;
    }
}

.group__list {
    display: grid;
    gap: 0.4rem;
    margin: 0;
    padding: 0;
    overflow: hidden;
    list-style-type: none;
    position: relative;
    align-items: stretch;
    grid-auto-rows: 4.6rem;
}

.group__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 3.2rem;
    text-align: center;
    padding: 0.2rem 0.8rem;
    background: var(--background-inactive-color);
    border-radius: 0.4rem;

    &--active {
        background: var(--background-active-color);
        color: var(--active-text-color);

        & .window-number::after {
            background: var(--active-text-color);
        }
    }
}

.left-part {
    width: 55%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.window-number {
    position: relative;

    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 0.15rem;
        background: #fff;

        bottom: 0;
        position: absolute;
    }
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

.datetime {
    display: flex;
    justify-content: space-between;
    background: #00000033;
    align-items: flex-end;
    position: absolute;
    right: 0;
    bottom: 0;
    height: 3.6rem;
    width: calc(50% - 0.7rem);
    border-radius: 0.4rem;
    font-size: 1.5rem;
    padding: 0.2rem 0.8rem;
}

.time {
    font-size: 2.4rem;
}

.arrow-icon {
    width: 2.4rem;
    height: 2.4rem;
}
</style>
