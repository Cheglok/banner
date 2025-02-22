# kazakhstan-banner

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

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

