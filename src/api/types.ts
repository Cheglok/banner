export interface TerminalData {
    topPart: TopPart; // виджеты
    bottomPart: BottomPart; // баннеры
}

export interface TopPart {
    widgets: {
        weather: WeatherWidgetData; // ключи - словарь, по которому определяется компонент. Отобразятся только те компоненты, которые переданы
        traffics: TrafficsWidgetData;
        currency: CurrencyWidgetData;
    };
    animationDuration: number; // время между сменами виджетов
}

export interface BottomPart {
    banners: string[]; //названия соответствуют названиям картинок, например astana-motors-banner.png
    // картинки складывать в /images/banners
    animationDuration: number;
}

export interface WeatherWidgetData {
    title: string; // Погода в Астане / Погода завтра
    date: string; // Среда, 15 января
    temperature: number;
    description: string; // Облачно
    slogan: string; // Облачно, возможны осадки<br>Хорошего дня!
    backgroundIcon: string; // иконка погоды, которая лежит по пути /images/weather-icons/{icon}.svg
    hours: WeatherDay[];
}

export interface WeatherDay {
    hour: string;
    temp: number;
    icon: string; // иконка погоды, которая лежит по пути /images/weather-icons/{icon}.svg
}

export interface TrafficsWidgetData {
    level: number; // от 1 до 10
    description: string;
    slogan: string;
}

export interface CurrencyWidgetData {
    currency_rates: {
        usd: Currency; // ключи - словарь, по которому определяются иконки символов валюты и флагов:
        rub: Currency; // /images/currency-icons/flags/rub.svg
        eur: Currency; // /images/currency-icons/eur.svg
        cny: Currency;
        gbp: Currency;
    };
}

export interface Currency {
    sell: number;
    buy: number;
}
