<template>
    <div v-if="data" class="currency" :class="{ 'full-height': isFullHeight }" @click="isFullHeight = !isFullHeight">
        <h2 class="currency-heading">Курсы валют</h2>
        <div class="table-wrapper">
            <table class="table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Покупка</th>
                        <th>Продажа</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(currency, currencyName) in data.currency_rates" :key="currencyName">
                        <td>
                            <div class="cell_currency">
                                <img
                                    :src="`/images/currency-icons/${currencyName}.svg`"
                                    class="currency-icon"
                                    alt="`${currencyName}-icon`"
                                />
                            </div>
                        </td>
                        <td class="cell_flag">
                            <img
                                :src="`/images/currency-icons/flags/${currencyName}.svg`"
                                class="flag-icon"
                                alt="`${currencyName}-flag`"
                            />
                        </td>
                        <td class="cell_price">
                            {{ currency.buy }}
                        </td>
                        <td class="cell_price">{{ currency.sell }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CurrencyWidgetData } from '@/api/types.ts';

defineProps<{
    data: CurrencyWidgetData;
}>();

const isFullHeight = ref(false);
</script>

<style scoped lang="scss">
.currency {
    padding: 0 2em;
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

        & .currency-heading {
            margin-top: 4rem;
        }

        & .table-wrapper {
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
        }

        & th {
            font-size: 2rem;
            width: 16%;

            &:nth-child(3) {
                width: 37%;
                padding-left: 3.2rem;
            }

            &:nth-child(4) {
                width: 37%;
                padding-left: 3.2rem;
            }
        }

        & .cell_price {
            padding-left: 3.2rem;
        }

        & .cell_currency,
        .flag-icon {
            width: 4.4rem;
            height: 4.4rem;
        }

        & .currency-icon {
            width: 2.4rem;
            height: 2.4rem;
            transition: var(--widget-transition);
        }
    }
}

.table-wrapper {
    position: absolute;
    width: calc(100vw - 4rem);
    transition: var(--widget-transition);
    top: 18%;
}

.currency-heading {
    font-size: 2.4em;
    font-weight: 700;
    margin: 2rem 0 1.4rem;
    transition: var(--widget-transition);
}

.table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;

    th {
        font-size: 1.6em;
        padding: 0 0 0.8rem 0;
        width: 11%;
        text-align: left;
        transition: var(--widget-transition);

        &:nth-child(3) {
            width: 40%;
            padding-left: 5.5rem;
        }

        &:nth-child(4) {
            width: 40%;
            padding-left: 5.5rem;
        }
    }

    td {
        text-align: center;
        padding: 0;
        transition: var(--widget-transition);

        &.cell_price {
            padding-left: 5.5rem;
            font-size: 2.4rem;
            line-height: 2.4rem;
            font-weight: 700;
            color: white;
            text-align: left;
        }
    }

    tbody {
        tr:not(:last-child) {
            td {
                padding-bottom: 1rem;
            }
        }
    }
}

.cell_currency {
    background: white;
    width: 3.2em;
    height: 3.2em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--widget-transition);
}

.cell_flag {
    line-height: 0;
}

.currency-icon {
    width: 1.745rem;
    height: 1.745rem;
    transition: var(--widget-transition);
}

.flag-icon {
    width: 3.2em;
    height: 3.2em;
    transition: var(--widget-transition);
}
</style>
