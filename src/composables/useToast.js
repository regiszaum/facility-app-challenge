import { getCurrentInstance } from 'vue';

export function useToast() {
  const instance = getCurrentInstance();
  return instance?.appContext.config.globalProperties.$toast;
}