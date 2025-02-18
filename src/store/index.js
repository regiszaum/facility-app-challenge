import { createStore } from 'vuex';
import user from '../modules/public/store/user';
import tasks from '../modules/auth/store/tasks';

export default createStore({
  modules: {
    user,  // Store de usuário
    tasks, // Store de tarefas
  }
});
