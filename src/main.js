// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import PrimeVue from "primevue/config";
import Lara from '@/presets/lara';
import "primevue/resources/themes/lara-light-amber/theme.css"

const app = createApp(App)

app.use(router)

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara,
})

app.mount('#app')
