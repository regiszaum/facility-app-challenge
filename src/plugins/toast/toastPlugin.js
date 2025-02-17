import { createApp } from 'vue';
import Toast from './Toast.vue';

const ToastPlugin = {
  install(app) {
    const toastContainer = document.createElement('div');
    document.body.appendChild(toastContainer);

    const toastInstance = createApp(Toast).mount(toastContainer);

    app.config.globalProperties.$toast = (msg, type = 'success', duration = 3000) => {
      toastInstance.showToast(msg, type, duration);
    };
  }
};

export default ToastPlugin;
