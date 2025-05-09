import { createApp } from 'vue';
import { createPinia } from 'pinia'
import { createRouter } from "vue-router/auto";
import App from './App.vue';
import i18n from './i18n'
// import { createWebHistory } from 'vue-router';
// import router from './router/index';
// import Vant from 'vant'

// import './index.css';
const pinia = createPinia()
const app = createApp(App)
// const router = createRouter({
//     history: createWebHistory()
// })

app.use(i18n)
// app.use(Vant)
app.use(pinia)
// app.use(router)
app.mount('#root');
