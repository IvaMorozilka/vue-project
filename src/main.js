import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import "primevue/resources/themes/lara-light-amber/theme.css"
import PrimeVue from "primevue/config";

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.mount('#app')
