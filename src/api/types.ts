export interface TerminalData {
    widgetsPart: WidgetsData; // виджеты
    bannersPart: BannersData; // баннеры
    deviceType?: DEVICE_TYPE; // тип устройства
}

export interface WidgetsData {
    widgets: {
        weather: WeatherWidgetData; // ключи - словарь, по которому определяется компонент. Отобразятся только те компоненты, которые переданы
        traffics: TrafficsWidgetData;
        currency: CurrencyWidgetData;
        queue: QueueWidgetData;
        location: LocationWidgetData;
    };
    animationDuration: number; // время между сменами виджетов
}

export interface BannersData {
    banners: Banner[];
    animationDuration: number; // время между сменами баннеров
}

export interface Banner {
    type: 'image' | 'video';
    src: string; //путь к картинке или видео, например /images/banners/astana-motors-banner.png. Можно абсолютный в сети
    animationDuration?: number; // время показа баннера, в миллисекундах
}

export interface WeatherWidgetData {
    title: string; // Погода в Астане / Погода завтра
    date: string; // Среда, 15 января
    temperature: number; // температура
    description: string; // Облачно
    slogan: string; // надпись в нижней части, может обрабатывать HTML. Пример: Облачно, возможны осадки<br>Хорошего дня!
    backgroundIcon: string; // иконка погоды, которая лежит по пути /images/weather-icons/{icon}.svg
    hours: WeatherDay[];
}

export interface WeatherDay {
    hour: string; // 8:00
    temp: number; // температура
    icon: string; // иконка погоды, которая лежит по пути /images/weather-icons/{icon}.svg
}

export interface TrafficsWidgetData {
    level: number; // от 1 до 10
    description: string; // Средняя загрузка на дорогах
    slogan: string; // подпись в нижней части экрана, может обрабатывать HTML
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

export interface QueueWidgetData {
    queue: QueueItem[];
    theme?: 'black' | 'light';
}
export interface QueueItem {
    number: string;
    window: string;
    active: boolean;
}

export interface LocationWidgetData {
    location: string;
    routes: Route[];
}

export interface Route {
    name: string;
    carTime: number;
    pedestrianTime: number;
}

export enum DEVICE_TYPE {
    TVinCON = 'TVinCON',
}
