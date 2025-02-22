import type { App } from 'vue';
import { defineAsyncComponent } from 'vue';

export function registerIconsGlobal(app: App) {
    app.component(
        'usdIcon',
        defineAsyncComponent(() => import('./currency/usdIcon.vue'))
    );
    app.component(
        'rubIcon',
        defineAsyncComponent(() => import('./currency/rubIcon.vue'))
    );
    app.component(
        'eurIcon',
        defineAsyncComponent(() => import('./currency/eurIcon.vue'))
    );

    app.component(
        'usdFlag',
        defineAsyncComponent(() => import('./flags/usdFlag.vue'))
    );
    app.component(
        'rubFlag',
        defineAsyncComponent(() => import('./flags/rubFlag.vue'))
    );
    app.component(
        'eurFlag',
        defineAsyncComponent(() => import('./flags/eurFlag.vue'))
    );
}
