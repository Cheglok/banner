import { TerminalData } from '@/api/types.ts';
export const mockData: TerminalData = {
    topPart: {
        widgets: {
            weather: {
                title: 'Погода в Астане',
                date: 'Среда, 15 января',
                temperature: -14,
                description: 'Облачно',
                days: [
                    {
                        day: 'чт',
                        temp: -6,
                        weather: 'cloud',
                    },
                    {
                        day: 'пт',
                        temp: -13,
                        weather: 'sun-light-rain',
                    },
                    {
                        day: 'сб',
                        temp: -3,
                        weather: 'cloud-two-snow-fog',
                    },
                    {
                        day: 'чт',
                        temp: -6,
                        weather: 'cloud',
                    },
                    {
                        day: 'пт',
                        temp: -13,
                        weather: 'cloud',
                    },
                    {
                        day: 'сб',
                        temp: -3,
                        weather: 'cloud',
                    },
                ],
            },
            traffics: {
                level: 9,
                description: 'Средняя загрузка на дорогах',
            },
            currency: {
                currency_rates: {
                    usd: {
                        sell: 100.0,
                        buy: 507.5,
                    },
                    eur: {
                        sell: 100.0,
                        buy: 531.5,
                    },
                    rub: {
                        sell: 50.88,
                        buy: 5.85,
                    },
                },
            },
        },
        animationDuration: 3000,
    },
    bottomPart: {
        banners: ['my-car-banner.png', 'astana-motors-banner.png', 'nutcracker-banner.png'],
        animationDuration: 2500,
    },
};
