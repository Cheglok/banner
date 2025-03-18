<template>
    <div class="location" :class="{ 'full-height': fullHeight, 'half-height': !fullHeight }">
        <header class="location__heading">
            Вы здесь
            <span class="location__location">
                <svg class="location__icon" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.99214 1C5.92125 1 3 3.43355 3 6.62045C3 8.63596 3.70168 10.0598 4.78284 11.6209C5.97892 13.3478 7.49608 14.9616 8.16799 15.6495C8.62437 16.1168 9.37563 16.1168 9.83201 15.6495C10.5039 14.9616 12.0211 13.3478 13.2172 11.6209C14.2983 10.0598 15 8.63596 15 6.62045C15 3.43354 12.0787 1 9.0078 1L8.99997 1.00004L8.99214 1ZM7.67648 6.9122C7.67648 6.19724 8.25116 5.6379 9.00315 5.6379C9.75234 5.6379 10.3235 6.19454 10.3235 6.9122C10.3235 7.66328 9.71856 8.26236 9.00315 8.26236C8.28502 8.26236 7.67648 7.66051 7.67648 6.9122ZM9.00315 4.3014C7.54944 4.3014 6.32888 5.41762 6.32888 6.9122C6.32888 8.37341 7.51558 9.59886 9.00315 9.59886C10.4935 9.59886 11.6711 8.37064 11.6711 6.9122C11.6711 5.42032 10.4597 4.3014 9.00315 4.3014Z"
                        fill="white"
                    />
                </svg>
                {{ data.location }}
            </span>
        </header>
        <div class="location__content">
            <span v-if="fullHeight" class="location__hint">Дорога до</span>
            <ul class="location__routs">
                <li class="rout" v-for="route in filteredRoutes" :key="route.name">
                    <span class="rout__name">{{ route.name }}</span>
                    <span class="time car-time" :class="findColor(route.carTime)">
                        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.31881 5.58022H7.82138C6.59224 5.58022 5.51202 6.39502 5.17433 7.57686L3.05342 14.9997C2.70085 16.2337 3.45074 17.4628 4.61793 17.7787C4.87725 18.7242 5.74268 19.4195 6.77077 19.4195C7.77043 19.4195 8.6166 18.7624 8.90088 17.8565L16.0991 17.857C16.3836 18.7626 17.2296 19.4195 18.2291 19.4195C19.2516 19.4195 20.1133 18.7317 20.3777 17.794C21.6166 17.5254 22.5446 16.4228 22.5446 15.1035V13.6912C22.5446 12.2254 21.3563 11.0371 19.8905 11.0371C19.3593 11.0371 18.8802 10.7174 18.6764 10.2268L17.4508 7.27697C17.024 6.24969 16.0209 5.58022 14.9085 5.58022H8.34647C8.33723 5.58003 8.328 5.58003 8.31881 5.58022ZM20.3237 16.4137C20.8407 16.2035 21.2053 15.6961 21.2053 15.1035V13.6912C21.2053 12.9651 20.6166 12.3764 19.8905 12.3764C19.2372 12.3764 18.623 12.1369 18.1497 11.7258L16.9433 12.3289C16.5121 12.5445 16.0318 12.6431 15.5505 12.6148L7.44649 12.1381C7.27577 12.1281 7.10636 12.1021 6.94045 12.0607L5.39637 11.6746L4.34117 15.3677C4.22938 15.7589 4.39302 16.1489 4.69722 16.3589C5.02611 15.5361 5.83071 14.9552 6.77077 14.9552C7.77006 14.9552 8.61597 15.6119 8.90056 16.5172L16.0991 16.5177C16.3836 15.6121 17.2296 14.9552 18.2291 14.9552C19.1899 14.9552 20.0091 15.562 20.3237 16.4137ZM5.76452 10.3862L6.67739 10.6144L7.48974 6.95884C7.00285 7.07625 6.60428 7.44716 6.46208 7.94481L5.76452 10.3862ZM8.00162 10.8292L8.87044 6.91951H11.8303V11.0544L8.00162 10.8292ZM13.1696 11.1332L15.6292 11.2778C15.8763 11.2924 16.123 11.2418 16.3444 11.131L17.3855 10.6105L16.214 7.79081C15.9949 7.26329 15.4798 6.91951 14.9085 6.91951H13.1696V11.1332ZM11.8303 13.5415C11.8303 13.1717 12.1301 12.8719 12.4999 12.8719H13.5416C13.9114 12.8719 14.2112 13.1717 14.2112 13.5415C14.2112 13.9114 13.9114 14.2112 13.5416 14.2112H12.4999C12.1301 14.2112 11.8303 13.9114 11.8303 13.5415ZM6.77077 16.2945C6.27737 16.2945 5.87791 16.694 5.87791 17.1869C5.87791 17.6802 6.27794 18.0802 6.77077 18.0802C7.26388 18.0802 7.66363 17.6805 7.66363 17.1874C7.66363 16.6943 7.26388 16.2945 6.77077 16.2945ZM18.2291 16.2945C17.736 16.2945 17.3362 16.6943 17.3362 17.1874C17.3362 17.6805 17.736 18.0802 18.2291 18.0802C18.7219 18.0802 19.122 17.6802 19.122 17.1869C19.122 16.694 18.7225 16.2945 18.2291 16.2945Z"
                                fill="white"
                            />
                        </svg>
                        {{ formatMinutes(route.carTime) }}
                    </span>
                    <span v-if="fullHeight" class="time pedestrian-time">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.9798 7.49406C14.0074 7.57622 14.9117 6.79576 14.9939 5.76884C15.0761 4.74192 14.3157 3.83823 13.2676 3.75608C12.24 3.67392 11.3357 4.43384 11.2535 5.4813C11.1918 6.50822 11.9523 7.41191 12.9798 7.49406Z"
                                fill="black"
                            />
                            <path
                                d="M11.8167 7.82082C12.0931 7.62113 12.4309 7.47136 12.7995 7.50464C13.2755 7.55457 13.6748 7.87074 13.9204 8.27013L15.3332 11.2988L17.2527 12.7465C17.4216 12.8797 17.5137 13.1126 17.4983 13.3456C17.4676 13.7284 17.1605 13.9946 16.8227 13.978C16.7152 13.978 16.6384 13.928 16.5309 13.8781L14.4272 12.3139C14.3658 12.2473 14.3043 12.1807 14.2736 12.1142L13.7515 10.9826L13.1066 13.978L15.5942 17.1564C15.6556 17.2562 15.6864 17.3727 15.7171 17.4892L16.3927 21.3333C16.3927 21.4165 16.4081 21.4664 16.3927 21.5496C16.3467 22.1154 15.9013 22.5314 15.3639 22.4981C14.9339 22.4649 14.6115 22.1154 14.504 21.6827L13.8744 18.0716L11.8628 15.6753L11.3867 18.0051C11.3714 18.1216 11.2332 18.3379 11.2025 18.4377L9.26764 21.9823C9.06801 22.3151 8.74554 22.5148 8.377 22.4815C7.8549 22.4316 7.47101 21.949 7.50172 21.3666C7.51708 21.2001 7.5785 21.0337 7.62457 20.9339L9.4212 17.6556L10.9107 10.4501L9.92794 11.3154L9.40584 13.8781C9.34442 14.2109 9.06801 14.4772 8.73018 14.4439C8.39236 14.4106 8.11595 14.0945 8.14666 13.7117C8.14666 13.6784 8.16202 13.6452 8.16202 13.6285L8.77625 10.6331C8.80696 10.5 8.88374 10.3835 8.97588 10.3003L11.8167 7.82082Z"
                                fill="black"
                            />
                        </svg>
                        {{ formatMinutes(route.pedestrianTime) }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { LocationWidgetData } from '@/api/types.ts';
import { pluralizeRussian } from '@/helpers/pluralizeWord.ts';
import { computed } from 'vue';

const props = defineProps<{
    data: LocationWidgetData;
    fullHeight: boolean;
}>();

const filteredRoutes = computed(() => {
    if (props.fullHeight) {
        return props.data.routes;
    }
    return props.data.routes.slice(0, 4);
});

function formatMinutes(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    let result = '';

    if (hours > 0) {
        result += `${hours} ${pluralizeRussian(hours, 'часов', 'час', 'часа', 'часов')} `;
    }

    if (remainingMinutes > 0) {
        result += `${remainingMinutes} мин`;
    }

    return result.trim() || '0 минут';
}

function findColor(minutes: number) {
    if (minutes < 30) {
        return 'green';
    } else if (minutes >= 30 && minutes < 50) {
        return 'yellow';
    } else {
        return 'red';
    }
}
</script>

<style scoped lang="scss">
.location {
    background: linear-gradient(90deg, #22547b 0%, #0593ae 100%);
    color: #fff;
    border-radius: 2.2em;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 1;
    transition: var(--widget-transition);

    &.full-height {
        height: 100vh;
        position: absolute;
        z-index: 2;
        .location__heading {
            padding: 4rem 2rem;
        }
        .location__location {
            margin-bottom: 4rem;
        }
        .rout {
            padding: 1.6rem 2rem 0.8rem;
            font-size: 2rem;
            gap: 0.4rem;
            flex-wrap: wrap;
        }
        .rout__name {
            min-width: 100%;
        }
    }
}

.location__heading {
    padding: 2rem;
    display: grid;
    justify-items: start;
    gap: 0.4rem;
    font-size: 1.6rem;
}

.location__location {
    padding: 0.4rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    background: #ffffff4d;
    border-radius: 0.8rem;
    font-size: 2rem;
    font-weight: bold;
}

.location__icon {
    width: 1.8rem;
    height: 1.8rem;
}

.location__hint {
    padding-left: 2rem;
    font-size: 1.4rem;
}

.location__routs {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    font-weight: bold;
}

.rout {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem 2rem 0.4rem;
    font-size: 1.6rem;
    border-bottom: 0.1rem solid white;
}

.rout__name {
    flex-grow: 1;
}

.time {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.2rem 0.6rem;
    line-height: 1;
    height: 3.1rem;
    border-radius: 0.8rem;
    flex-shrink: 0;

    & svg {
        width: 2.5rem;
        height: 2.5rem;
    }

    &.green {
        background: #13b53c;
    }
    &.yellow {
        background: #fd9a05;
    }
    &.red {
        background: #ee1e12;
    }
}

.pedestrian-time {
    color: black;
    background: white;
}
</style>
