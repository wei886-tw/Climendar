import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// import Bootstrap 5
import '../src/assets/all.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // needs additional webpack config!


// import axios
import axios from 'axios';

// import vue-loading
import { LoadingPlugin } from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.config.globalProperties.$http = axios;
app.use(LoadingPlugin);
app.config.globalProperties.$gapi = {
  clientId: `${import.meta.env.VITE_GOOGLE_OAUTH2_CLIENT_ID}.apps.googleusercontent.com`,
  scope: '886.hu5tle@gmail.com',
  prompt: 'select_account'
}
app.mount('#app');
