<template>
    <div class="currency">
        <h2 class="currency-heading">Курсы валют</h2>
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th>покупка</th>
                    <th>продажа</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(currency, currencyName) in currency_rates">
                    <td>
                        <div class="cell_currency">
                            <component :is="`${currencyName}Icon`" class="currency-icon" />
                        </div>
                    </td>
                    <td class="cell_flag">
                        <component :is="`${currencyName}Flag`" />
                    </td>
                    <td class="cell_price">
                        <div class="price">{{ currency.buy }}</div>
                    </td>
                    <td class="cell_price">
                        <div class="price">{{ currency.sell }}</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
const currency_rates = {
    usd: {
        sell: 508.0,
        buy: 507.5,
    },
    eur: {
        sell: 532.0,
        buy: 531.5,
    },
    rub: {
        sell: 5.88,
        buy: 5.85,
    },
};
</script>

<style scoped lang="scss">
.currency {
    padding: 2em;
    background: linear-gradient(90deg, #5ab2f7 0%, #12cff3 100%);
    color: #fff;
    border-radius: 2.2em;
    height: 100%;
    width: 100%;
    position: absolute;
}
.currency-heading {
    font-size: 2.4em;
    font-weight: 700;
    margin: 0 0 1.4rem;
}

.table {
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;

    th {
        font-size: 1.6em;
        padding: 0 0 0.8rem 0;

        &:first-child {
            width: 15%;
        }

        &:nth-child(3) {
            width: 35.5%;
            padding-left: 1.8rem;
        }

        &:nth-child(4) {
            width: 35.5%;
            padding-left: 1.8rem;
        }
    }

    td {
        text-align: center;
        padding: 0;
        &.cell_price {
            padding-left: 1.8rem;
        }
    }

    tbody {
        color: black;
        tr:not(:last-child) {
            td {
                padding-bottom: 1rem;
            }
        }
    }
}

.cell_currency {
    background: white;
    width: 4.4em;
    height: 4.4em;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cell_flag {
    line-height: 0;
}

.price {
    font-size: 3em;
    line-height: 2.4rem;
    font-weight: 700;
    background-color: white;
    width: min-content;
    min-width: 10.6rem;
    padding: 1rem;
    border-radius: 2.2rem;
}
</style>
