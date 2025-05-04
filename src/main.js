import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import Bootstrap 5
import '../src/assets/all.scss/';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import axios
import axios from 'axios';


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.config.globalProperties.$http = axios 
app.mount('#app')
