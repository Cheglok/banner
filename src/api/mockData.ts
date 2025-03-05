import { TerminalData } from '@/api/types.ts';
export const mockData: TerminalData = {
    topPart: {
        widgets: {
            weather: {
                title: 'Погода в Астане',
                date: 'Среда, 15 января',
                temperature: -14,
                description: 'Облачно',
                slogan: 'Облачно, возможны осадки<br>Хорошего дня!',
                backgroundIcon: 'd',
                hours: [
                    {
                        hour: '8:00',
                        temp: -6,
                        icon: 'd',
                    },
                    {
                        hour: '8:00',
                        temp: -6,
                        icon: 'd',
                    },
                    {
                        hour: '8:00',
                        temp: -6,
                        icon: 'n',
                    },
                    {
                        hour: '8:00',
                        temp: -6,
                        icon: 'd_c1_r1',
                    },
                    {
                        hour: '8:00',
                        temp: -6,
                        icon: 'c3_s3',
                    },
                    {
                        hour: '8:00',
                        temp: -6,
                        icon: 'c3_s3',
                    },
                ],
            },
            traffics: {
                level: 9,
                description: 'Средняя загрузка на дорогах',
                slogan: 'Желаем быстрее добраться до пункта назначения!',
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
                    cny: {
                        sell: 100.0,
                        buy: 531.5,
                    },
                    gbp: {
                        sell: 50.88,
                        buy: 5.85,
                    },
                },
            },
        },
        animationDuration: 7000,
    },
    bottomPart: {
        banners: ['my-car-banner.png', 'astana-motors-banner.png', 'nutcracker-banner.png'],
        animationDuration: 10000,
    },
};
