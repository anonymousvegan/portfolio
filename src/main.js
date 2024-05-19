import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PerfectScrollbarPlugin, {
    scrollingThreshold: 0,
})

app.mount('#app')
