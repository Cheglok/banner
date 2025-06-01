# kazakhstan-banner

Используется NodeJS 22

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


### Валюта
Чтобы добавить новую валюту нужно положить в папку с иконками новые иконки для символа и флага
назвав их в соответствии с ключом новой валюты
rub -> rubIcon, usd -> usdIcon, eur -> eurIcon
rub -> rubFlag, usd -> usdFlag, eur -> eurFlag
Зарегистрировать иконки в файле регистрации иконок registerIconsGlobal

### Устройства
Возникла необходимость работать с другими устройствами, в частности телевизор с разрешением 1920х1080
на котором экран должен быть поделен в соотношении 40 / 60
Для реализации специфичного поведения добавлен параметр в конфиг "deviceType": "TVinCON"
Сейчас он повлияет на раскладку блоков, а также на стили виджета очереди. Остальные виджеты не были адаптированы к работе на таком разрешении, что и не требовалось

### Дополнительная информация
Если виджет один, то желательно не присылать / обнулить параметр animationDuration для widgetsPart
