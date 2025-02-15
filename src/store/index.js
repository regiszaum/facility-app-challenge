import { createStore } from 'vuex';

// Função para carregar o estado do localStorage
function loadState() {
  const savedState = localStorage.getItem('vuexState');
  return savedState ? JSON.parse(savedState) : { count: 0 };
}

// Criar o Vuex store
const store = createStore({
  state: loadState(),

  mutations: {
    increment(state) {
      state.count++;
      localStorage.setItem('vuexState', JSON.stringify(state)); // Salvar no localStorage
    },
  },

  actions: {
    increment({ commit }) {
      commit('increment');
    },
  },
});

export default store;
