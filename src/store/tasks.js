import { createStore } from 'vuex';

// Função para carregar o estado do localStorage
const loadState = () => {
  const storedState = localStorage.getItem('tasksStore');
  if (storedState) {
    return JSON.parse(storedState);
  }
  return {
    tasks: [
      { id: 1, title: 'Finalizar relatório', description: 'Finalizar o relatório de vendas do mês', tag: 'urgent', status: 'open' },
      { id: 2, title: 'Revisar código', description: 'Revisar código do novo módulo', tag: 'important', status: 'open' },
      { id: 3, title: 'Planejar reunião', description: 'Planejar reunião com o time de design', tag: 'other', status: 'closed' },
      { id: 4, title: 'Implementar API', description: 'Criar endpoints para o serviço de autenticação', tag: 'urgent', status: 'open' },
      { id: 5, title: 'Escrever documentação', description: 'Documentar os novos endpoints da API', tag: 'important', status: 'closed' },
      { id: 6, title: 'Testes automatizados', description: 'Criar testes unitários para a nova feature', tag: 'urgent', status: 'open' },
      { id: 7, title: 'Ajustar layout', description: 'Corrigir problemas de responsividade', tag: 'important', status: 'closed' },
      { id: 8, title: 'Atualizar dependências', description: 'Atualizar pacotes do projeto para as versões mais recentes', tag: 'other', status: 'open' },
      { id: 9, title: 'Refatorar componente', description: 'Melhorar a organização e performance do componente Header', tag: 'important', status: 'open' },
      { id: 10, title: 'Correção de bugs', description: 'Corrigir bugs reportados no último sprint', tag: 'urgent', status: 'closed' }
    ]
  };
};

export default createStore({
  state: loadState(),
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasksStore', JSON.stringify(state));
    },
    TOGGLE_TASK_STATUS(state, taskId) {
      const task = state.tasks.find(t => t.id === taskId);
      if (task) {
        task.status = task.status === 'open' ? 'closed' : 'open';
        localStorage.setItem('tasksStore', JSON.stringify(state));
      }
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('ADD_TASK', task);
    },
    toggleTaskStatus({ commit }, taskId) {
      commit('TOGGLE_TASK_STATUS', taskId);
    }
  },
  getters: {
    openTasks: state => state.tasks.filter(task => task.status === 'open'),
    closedTasks: state => state.tasks.filter(task => task.status === 'closed'),
    urgentTasks: state => state.tasks.filter(task => task.tag === 'urgent'),
    importantTasks: state => state.tasks.filter(task => task.tag === 'important'),
    otherTasks: state => state.tasks.filter(task => task.tag === 'other')
  }
});
