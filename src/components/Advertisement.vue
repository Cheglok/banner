<template>
    <div class="advertisement">
        <img src="/images/LogoMechta.png" alt="Логотип Mechta.kz" class="logo">
        <img src="/images/Advert.png" alt="Выгода до -90%" class="advert-text">
        <img src="/images/Phone.png" alt="Фото нового телефона" class="phone">
    </div>
</template>

<style lang="scss">
.advertisement {
    width: 100%;
    height: 46em;
    background: white;
    border-radius: 2.2em;
    position: absolute;
    bottom: 0;
    padding-top: 1.3em;
    animation-name: fill-up-screen;
    animation-duration: var(--animation-duration);
    animation-timing-function: cubic-bezier(.17,.67,.61,1.27);
    @keyframes fill-up-screen {
        6% {
            height: 46em;
            padding-top: 1.3em;
        }
        12% {
            height: 100%;
            padding-top: 4.1em;
        }
        24% {
            height: 100%;
            padding-top: 4.1em;
        }
        30% {
            height: 46em;
            padding-top: 1.3em;
        }
    }
}
.logo {
    width: 26em;
    height: 5.2em;
    display: block;
    margin: 0 auto;
    left: 0;
    position: relative;
    animation-name: logo-shift;

    animation-duration: var(--animation-duration);
    @keyframes logo-shift {
        36% {
            left: 0;
        }
        44% {
            left: 50em;
        }
        72% {
            left: 50em;
        }
        84% {
            left: 0;
        }
    }
}
.advert-text {
    position: absolute;
    top: 8.5em;
    left: 1.5em;
    animation-name: advert-move;
    width: 32.9em;
    height: 11.7em;

    animation-duration: var(--animation-duration);
    @keyframes advert-move {
        6% {
            top: 8.5em;
        }
        12% {
            top: 14em;
        }
        24% {
            top: 14em;
        }
        30% {
            top: 8.5em;
        }
        36% {
            top: 8.5em;
        }
        40% {
            top: 29.5em;
        }
        72% {
            top: 29.5em;
        }
        84% {
            top: 8.5em;
        }
    }
}
.phone {
    position: absolute;
    top: 21.7em;
    left: 8.2em;
    animation-name: phone-move;
    animation-duration: var(--animation-duration);
    transform-origin: top left;
    width: 21.9em;
    height: 43.9em;
    @keyframes phone-move {
        6% {
            top: 21.7em;
            left: 8.2em;
            scale: 1;
        }
        12% {
            top: 30.4em;
            left: 4.2em;
            scale: 1.36;
        }
        24% {
            top: 30.4em;
            left: 4.2em;
            scale: 1.36;
        }
        30% {
            top: 21.7em;
            left: 8.2em;
            scale: 1;
        }
        36% {
            top: 21.7em;
            left: 8.2em;
            rotate: 0deg;
        }
        40% {
            top: -11.5em;
            left: 14em;
            rotate: -15deg;
        }
        48% {
            top: -13.5em;
        }
        56% {
            top: -11.5em;
        }
        64% {
            top: -13.5em;
        }
        72% {
            top: -11.5em;
            left: 14em;
            rotate: -15deg;
        }
        84% {
            top: 21.7em;
            left: 8.2em;
            rotate: 0deg;
        }
    }
}
</style>