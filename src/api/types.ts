export interface TerminalData {
    topPart: TopPart;
    bottomPart: BottomPart;
}

export interface TopPart {
    widgets: {
        weather: WeatherWidgetData; // ключи - словарь, по которому определяется компонент
        traffics: TrafficsWidgetData;
        currency: CurrencyWidgetData;
    };
    animationDuration: number;
}

export interface BottomPart {
    banners: string[]; //названия соответствуют названиям картинок
    animationDuration: number;
}

export interface WeatherWidgetData {
    title: string;
    date: string;
    temperature: number;
    description: string;
    days: WeatherDay[];
}

export interface WeatherDay {
    day: string;
    temp: number;
    weather: string; // словарь, по которому определяется иконка погоды, в виде {weather}.svg
}

export interface TrafficsWidgetData {
    level: number;
    description: string;
}

export interface CurrencyWidgetData {
    currency_rates: {
        usd: Currency; // ключи - словарь, по которому определяются иконки символов валюты и флагов
        rub: Currency;
        eur: Currency;
    };
}

export interface Currency {
    sell: number;
    buy: number;
}
