import './assets/main.css'
import './assets/styles/global.styl';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Adicionar ícones ao FontAwesome
library.add(faPlus);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router)
app.use(store);
app.mount('#app');