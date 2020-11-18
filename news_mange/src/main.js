import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  './element'
import './flash'
import './assets/CSS/global.css'
//import axios from 'axios'
//import echarts from 'echarts'

createApp(App).use(store).use(router).mount('#app')
