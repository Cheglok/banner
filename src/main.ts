import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import { registerIconsGlobal } from '@/components/Icons/registerIconsGlobal.ts';

const app = createApp(App);

registerIconsGlobal(app);

app.mount('#app');
