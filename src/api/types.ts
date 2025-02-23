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
    banners: string[]; //названия соответствуют названиям картинок (astana-motors-banner.png)
    animationDuration: number;
}

export interface WeatherWidgetData {
    title: string; // Погода в Астане / Погода завтра
    date: string; // Среда, 15 января
    temperature: number;
    description: string; // Облачно
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
