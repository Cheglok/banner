<template>
    <div
        v-for="(currency, currencyName) in data.currency_rates"
        :key="currencyName"
        :style="{ transform: `translateY(${currentIndex * -18}rem)` }"
        class="popup"
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
import { onMounted, ref } from 'vue';
import { sleep } from '@/helpers/sleep.ts';
import { DEFAULT_POPUP_ANIMATION_DURATION } from '@/constants/constants.ts';

const props = defineProps<{
    data: CurrencyWidgetData;
    isLandscapeScreen: boolean;
}>();

const currentIndex = ref(0);

const showNextSlide = () => {
    setTimeout(() => {
        if (currentIndex.value < Object.keys(props.data.currency_rates).length - 1) {
            currentIndex.value++;
            showNextSlide();
        }
    }, props.data.animationDuration || DEFAULT_POPUP_ANIMATION_DURATION);
};

onMounted(async () => {
    await sleep(500);
    showNextSlide();
});
</script>

<style scoped lang="scss">
.popup {
    height: 18rem;
    border-radius: 4.4rem;
    background: linear-gradient(88deg, #00bb8c 0%, #5ad303 184.89%);
    padding: 3.2rem;
    transition: transform 0.5s ease;
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
            padding-left: 60px;
        }
    }

    td.cell_price {
        font-size: 6.8rem;
        letter-spacing: 0;
        vertical-align: middle;
        text-transform: lowercase;
        padding-left: 60px;
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
    background: #fff;
    border-radius: 50%;
}
</style>
