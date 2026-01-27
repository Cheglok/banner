<template>
    <div
        v-for="(currency, currencyName) in data.currency_rates"
        :key="currencyName"
        :style="{ transform: `translateY(${translateValue}rem)` }"
        class="currency popup"
        :class="{ 'currency--portrait': !isLandscapeScreen }"
    >
        <table class="table">
            <thead>
                <tr>
                    <th>Курсы валют</th>
                    <th class="cell_heading">Покупка</th>
                    <th class="cell_heading">Продажа</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="cell_icons">
                        <div class="icons">
                            <img
                                :src="`/images/currency-icons/${currencyName}.svg`"
                                class="currency-icon"
                                alt="`${currencyName}-icon`"
                            />
                            <img
                                :src="`/images/currency-icons/flags/${currencyName}.svg`"
                                class="flag-icon"
                                alt="`${currencyName}-flag`"
                            />
                        </div>
                    </td>
                    <td class="cell_price">
                        {{ currency.buy }}
                    </td>
                    <td class="cell_price">{{ currency.sell }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { CurrencyWidgetData } from '@/api/types.ts';
import { computed, inject, onMounted, ref } from 'vue';
import { sleep } from '@/helpers';

const props = defineProps<{
    data: CurrencyWidgetData;
}>();

const isLandscapeScreen = inject('isLandscapeScreen');
const popupsAnimationDuration: number = inject('popupsAnimationDuration') as number;

const currentIndex = ref(0);
const translateValue = computed(() => currentIndex.value * (-1 * (isLandscapeScreen ? 18 : 6.6)));

const showNextSlide = () => {
    setTimeout(() => {
        if (currentIndex.value < Object.keys(props.data.currency_rates).length - 1) {
            currentIndex.value++;
            showNextSlide();
        }
    }, props.data.animationDuration || popupsAnimationDuration);
};

onMounted(async () => {
    await sleep(800);
    showNextSlide();
});
</script>

<style scoped lang="scss">
.currency {
    height: 18rem;
    border-radius: 4.4rem;
    padding: 3.2rem;
    transition: transform 0.8s ease;
}

.table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
    color: var(--text-color);
    font-weight: bold;

    th {
        font-size: 3.2rem;
        line-height: 2.2rem;
        padding: 0 0 2.4rem 0;
        text-align: left;
        width: 42%;

        &.cell_heading {
            width: 29%;
            padding-left: 6rem;
        }
    }

    td.cell_price {
        font-size: 6.8rem;
        letter-spacing: 0;
        vertical-align: middle;
        text-transform: lowercase;
        padding-left: 6rem;
    }
}
.icons {
    display: flex;
    gap: 0.4rem;
}
.currency-icon,
.flag-icon {
    width: 7rem;
    height: 7rem;
    display: block;
    border-radius: 50%;
}
.currency-icon {
    background: #fff;
}

.currency--portrait {
    height: 6.6rem;
    border-radius: 1.6rem;
    padding: 1.2rem;
    .table {
        th {
            font-size: 1.2rem;
            line-height: 0.8rem;
            padding: 0 0 0.8rem 0;
            &.cell_heading {
                padding-left: 2.2rem;
            }
        }
        td.cell_price {
            font-size: 2.5rem;
            padding-left: 2.2rem;
        }
    }
    .currency-icon,
    .flag-icon {
        width: 2.6rem;
        height: 2.6rem;
    }
}
</style>
