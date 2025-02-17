import './assets/styles/reset.styl';
import './assets/styles/global.styl';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import userStore from './store/user';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import ToastPlugin from '@/plugins/toast/toastPlugin';
library.add(fas, far);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)
app.use(ToastPlugin)
app.use(userStore)
app.mount('#app');