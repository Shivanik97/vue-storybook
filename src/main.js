import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

managerWebpack: (config, options) => {
    options.cache.set = () => Promise.resolve();
    return config;
},

    app.mount('#app')
