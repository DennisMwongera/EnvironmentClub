import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/routes/routes' 
import '../src/css/style.css'
import "tailwindcss/tailwind.css"



createApp(App).use(router).mount('#app')

