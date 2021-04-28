import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/routes/routes' 
import '../src/css/style.css'
import "tailwindcss/tailwind.css"
import Vuex from 'vuex'



createApp(App).use(router).use(Vuex).mount('#app')

