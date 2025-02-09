<template>
    <div class="weather">
        <span>Погода в Астане</span>
        <iframe src="https://www.meteoblue.com/ru/weather/widget/daily/Астана_Казахстан_1526273?geoloc=fixed&days=6&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=1&maxtemperature=1&mintemperature=0&windspeed=0&windgust=0&winddirection=0&uv=0&humidity=0&precipitation=0&precipitationprobability=0&spot=0&pressure=0&layout=dark"  frameborder="0" scrolling="NO" allowtransparency="true" sandbox="allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox" style="width: 100%; height: 270px"></iframe>
        <span>Облачно, возможны осадки Хорошего дня!</span>
    </div>
</template>

<style lang="scss">
.weather {
    span {
        font-size: 2.4em;
        font-weight: 700;
    }
    padding: 2em;
    color: white;
    display: grid;
    height: 30.8em;
    background:  url("/images/Clouds.svg") no-repeat right 50%, linear-gradient(90deg, #5AB2F7 0%, #12CFF3 100%);
    width: 100%;
    border-radius: 2.2em;
    align-content: space-between;
    overflow: hidden;
    position: absolute;
    top: 0;
    animation-name: stretch-weather;
    animation-duration: var(--animation-duration);
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.17,.67,.61,1.27);
    @keyframes stretch-weather {
        92% {
            height: 30.8em;
            z-index: 0;
            padding: 2em;
        }
        96% {
            padding-top: 4em;
            padding-bottom: 4em;
            z-index: 2;
            height: 100%;
        }
        100% {
            padding-top: 4em;
            padding-bottom: 4em;
            z-index: 2;
            height: 100%;
        }
    }
}
</style>