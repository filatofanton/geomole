//import './assets/main.css'

import { createApp } from 'vue'
import pinia from './store'

import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')
